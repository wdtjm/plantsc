import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../pages/home.vue'
import download from '../pages/download.vue'
import celltype from '../pages/celltype.vue'
import marker from '../pages/marker.vue'
import overview from '@/pages/overview.vue'
import references from '@/pages/references.vue'
import release from '@/pages/release.vue'
import search from '@/pages/search.vue'
import spatial from '@/pages/spatial.vue'
import update from '@/pages/update.vue'
import markerDetail from '@/components/marker/marker-detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/celltype',
    name: 'celltype',
    component: celltype
  },
  {
    path: '/marker',
    name: 'marker',
    component: marker
  },
  {
    path: '/markerdetail',
    name: 'markerdetail',
    component: markerDetail
  },
  {
    path: '/search',
    name: 'search',
    component: search
  },
  {
    path: '/spatial',
    name: 'spatial',
    component: spatial
  },
  {
    path: '/references',
    name: 'references',
    component: references
  },
  {
    path: '/download',
    name: 'download',
    component: download
  },
  {
    path: '/release',
    name: 'release',
    component: release
  },
  {
    path: '/overview',
    name: 'overview',
    component: overview
  },
  {
    path: '/update',
    name: 'update',
    component: update
  },
  {
    path: '/blast',
    name : 'blast',
    component: () => import('@/pages/blast.vue')
  }
  
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
