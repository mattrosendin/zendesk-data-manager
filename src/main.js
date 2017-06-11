import App from './App.vue'
import Articles from './components/Articles.vue'
import Automations from './components/Automations.vue'
import Contact from './components/documentation/Contact.vue'
import Documentation from './components/documentation/Documentation.vue'
import Examples from './components/documentation/Examples.vue'
import Groups from './components/Groups.vue'
import Importer from './components/Importer.vue'
import ImportingData from './components/documentation/ImportingData.vue'
import Introduction from './components/documentation/Introduction.vue'
import Macros from './components/Macros.vue'
import Organizations from './components/Organizations.vue'
import Tickets from './components/Tickets.vue'
import Triggers from './components/Triggers.vue'
import Users from './components/Users.vue'
import Views from './components/Views.vue'

const router = new VueRouter({
  mode: 'history',
  scrollBehavior: function(to, from, savedPosition) {
    if (to.hash) return { selector: to.hash }
    else return { x: 0, y: 0 }
  },
  routes: [
    { path: '*', redirect: '/data' },
    { path: '/', redirect: '/data' },
    { path: '/data', redirect: '/data/tickets' },
    { path: '/data/articles', component: Articles },
    { path: '/data/groups', component: Groups },
    { path: '/data/organizations', component: Organizations },
    { path: '/data/tickets', component: Tickets },
    { path: '/data/users', component: Users },
    { path: '/metadata', redirect: '/metadata/automations' },
    { path: '/metadata/automations', component: Automations },
    { path: '/metadata/macros', component: Macros },
    { path: '/metadata/triggers', component: Triggers },
    { path: '/metadata/views', component: Views },
    { path: '/importer', component: Importer },
    { path: '/documentation', component: Documentation, children: [
      { path: '/documentation', redirect: '/documentation/introduction' },
      { path: '/documentation/contact', component: Contact },
      { path: '/documentation/introduction', component: Introduction },
      { path: '/documentation/examples', component: Examples },
      { path: '/documentation/importing-data', component: ImportingData }
    ] }
  ]
})

new Vue({
  el: '#root',
  router,
  components: { App },
  template: '<App/>'
})
