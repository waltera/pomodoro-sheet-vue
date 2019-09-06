<template>
  <div class="row">
    <div class="col-9">
      <task-list></task-list>
    </div>
    <div class="col-3">
      <task-filters></task-filters>
    </div>
  </div>
</template>

<script>
import TaskFilters from './Filters'
import TaskList from './List'

export default {
  components: {
    'task-filters': TaskFilters,
    'task-list': TaskList
  }
}
</script>