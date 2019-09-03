<template>
  <div>
    <timer></timer>
    <div className="row">
      <div className="col-sm-9">

      </div>
      <div className="col-sm-3">

      </div>
    </div>
  </div>
</template>

<script>
import Timer from './Timer.vue'

export default {
  components: {
    'timer': Timer
  }
}
</script>