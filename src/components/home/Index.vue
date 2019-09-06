<template>
  <div>
    <home-timer></home-timer>
    <div class="row">
      <div class="col-9">
        <task-list></task-list>
      </div>
      <div class="col-3">
        <home-status></home-status>
      </div>
    </div>
  </div>
</template>

<script>
import TaskFilters from 'components/tasks/Filters'
import TaskList from 'components/tasks/List'
import HomeTimer from './Timer.vue'
import HomeStatus from './Status.vue'

export default {
  components: {
    'task-filters': TaskFilters,
    'task-list': TaskList,
    'home-timer': HomeTimer,
    'home-status': HomeStatus
  }
}
</script>