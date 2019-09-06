<template>
  <div class="card">
    <div class="card-header">
      Criar Task
    </div>
    <div class="card-body">
      <task-form :submit-callback="createTask"></task-form>
    </div>
  </div>
</template>

<script>
import TasksService from 'services/tasks'

import TaskForm from './Form.vue'

export default {
  components: {
    'task-form': TaskForm
  },
  data() {
    return {
      createTask: TasksService.create
    }
  }
}
</script>