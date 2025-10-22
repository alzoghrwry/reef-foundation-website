import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// Import pages
import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'
import ProjectsPage from './pages/ProjectsPage.vue'
import NewsPage from './pages/NewsPage.vue'
import MediaGallery from './pages/MediaGallery.vue'
import ResourcesLibrary from './pages/ResourcesLibrary.vue'
import ClimateMap from './pages/ClimateMap.vue'
import Jobs from './pages/Jobs.vue'
import ContactUs from './pages/ContactUs.vue'
import Newsletter from './pages/Newsletter.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/projects', component: ProjectsPage },
  { path: '/news', component: NewsPage },
  { path: '/media-gallery', component: MediaGallery },
  { path: '/resources', component: ResourcesLibrary },
  { path: '/climate-map', component: ClimateMap },
  { path: '/jobs', component: Jobs },
  { path: '/contact', component: ContactUs },
  { path: '/newsletter', component: Newsletter }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
