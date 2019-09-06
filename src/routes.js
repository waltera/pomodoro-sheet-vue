import HomeIndex from 'components/home/Index.vue'

import TaskIndex from 'components/tasks/Index'
import TaskNew from 'components/tasks/New.vue'

export default [
  { path: '/', component: HomeIndex },
  // Tasks
  { path: '/tasks', component: TaskIndex },
  { path: '/tasks/new', component: TaskNew }
]