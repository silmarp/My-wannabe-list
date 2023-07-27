const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
    ],
  },

  {
    path: '/aboutus',
    name: 'About Us',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AboutUs.vue') },
    ],
  },

  {
    path: '/animelist',
    name: 'Anime List',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AnimeList.vue') },
    ],
  },

  {
    path: '/animeview/:id',
    name: 'Anime Info',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AnimeView.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    name: 'Error Not Found',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
