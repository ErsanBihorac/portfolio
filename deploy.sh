#! /bin/bash

set -e

echo "Starting deployment process..."

echo "Running npm install in root..."
npm install

rm -rf apps/portfolio-be/dist

echo "Navigating to the backend directory..."
cd apps/portfolio-be/

# skip, no prisma in the project
# echo "Generating Prisma client..."
# npx prisma generate

echo "Building backend application..."
npx nx build portfolio-be

echo "Copying .env and ecosystem config to dist..."
cp .env ./dist/
cp ecosystem.config.js ./dist

echo "Navigating to backend dist directory..."
cd dist

echo "Stopping and deleting existing 'backend' pm2 process..."
# Continue even if stop or delete fails (process might not exist)
pm2 stop portfolio-backend || true
pm2 delete portfolio-backend || true

echo "Starting backend with pm2..."
pm2 start ./ecosystem.config.js

echo "Verifying backend process..."
# This will show details or error if not running
pm2 describe portfolio-backend

#frontend
echo "Navigating back to project root..."
cd ../../../

rm -rf dist/apps/portfolio-web

echo "Building frontend application..."
npx nx build portfolio-web

echo "Copying frontend ecosystem config to dist..."
mkdir -p dist/apps/portfolio-web/server
cp apps/portfolio-web/ecosystem.config.js dist/apps/portfolio-web/server/

echo "Navigating to frontend dist directory..."
cd dist/apps/portfolio-web/server

echo "Stopping and deleting existing 'frontend' pm2 process..."
pm2 stop portfolio-frontend || true
pm2 delete portfolio-frontend || true

echo "Starting frontend with pm2..."
pm2 start ./ecosystem.config.js

echo "Verifying frontend process..."
pm2 describe portfolio-frontend

echo "Navigating back to project root..."
cd ../../../../

echo "Deployment script finished."

exit 0