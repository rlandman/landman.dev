import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

import { projects } from '../data/index.yml';

Vue.use(VueRouter);

const filteredProject = ({ params: { project } }) => (
  { project: projects.find(({ slug }) => slug === project) }
);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/projects',
    name: 'Projects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Projects.vue'),
  },
  {
    path: '/projects/:project',
    name: 'Project',
    component: () => import('../views/Project.vue'),
    props: filteredProject,
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
