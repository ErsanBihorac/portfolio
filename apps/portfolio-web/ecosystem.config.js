module.exports = {
  apps: [
    {
      name: 'portfolio-frontend',
      script: 'server.mjs',
      env: {
        PM2: 'true',
      }
    }
  ]
}