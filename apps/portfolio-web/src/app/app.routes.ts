import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: async () => {
      const module = await import('./components/landing-page/landing-page');
      return module.LandingPage;
    },
  },
  {
    path: 'imprint',
    loadComponent: async () => {
      const module = await import('./components/imprint-page/imprint-page');
      return module.ImprintPage;
    },
  },
  {
    path: 'privacy-policy',
    loadComponent: async () => {
      const module =
        await import('./components/privacy-policy-page/privacy-policy-page');
      return module.PrivacyPolicyPage;
    },
  },
  {
    path: 'contact',
    loadComponent: async () => {
      const module = await import('./components/form-page/form-page');
      return module.FormPage;
    },
  },
  {
    path: 'projects',
    loadComponent: async () => {
      const module = await import('./components/projects-page/projects-page');
      return module.ProjectsPage;
    },
  },
  {
    path: '**',
    loadComponent: async () => {
      const module = await import('./components/wild-card-page/wild-card-page');
      return module.WildCardPage;
    },
  },
];
