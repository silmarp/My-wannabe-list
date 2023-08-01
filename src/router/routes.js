const routes = [
  {
    path: '/',
    name: 'AniList',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'AniList', component: () => import('pages/AnimeList.vue') },
    ],
  },

  {
    path: '/aboutus',
    name: 'About Us',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'About Us', component: () => import('pages/AboutUs.vue') },
    ],
  },

  {
    path: '/animeview/:id',
    name: 'Anime Info',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Anime Info', component: () => import('pages/AnimeView.vue') },
    ],
  },

  {
    path: '/listas',
    name: 'Lista',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'fav', name: 'Favoritos', component: () => import('pages/List.vue') },
      { path: 'wanttosee', name: 'Quero Assistir', component: () => import('pages/List.vue') },
      { path: 'seen', name: 'Assistido', component: () => import('pages/List.vue') },
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
