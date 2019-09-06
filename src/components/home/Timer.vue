<template>
  <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h1 class="display-1">
        {{this.minutesWithZero}}:{{this.secondsWithZero}}
    </h1>
    <p class="lead">
      <b-button
        class="mr-1"
        variant="success"
        @click="startPomodoro"
        v-show="this.showButton('pomodoro')"
        :disabled="this.disableButton('pomodoro')"
      >Pomodoro</b-button>

      <b-button
        class="mr-1"
        variant="info"
        @click="startShortBreak"
        v-show="this.showButton('short-break')"
        :disabled="this.disableButton('short-break')"
      >Short Break</b-button>

      <b-button
        class="mr-1"
        variant="warning"
        @click="startLongBreak"
        v-show="this.showButton('long-break')"
        :disabled="this.disableButton('long-break')"
      >Long Break</b-button>

      <b-button
        variant="danger"
        @click="cancelTimer"
        v-if="this.timerId"
      >Cancelar</b-button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      operation: '',
      timerId: undefined,
      minutes: 0,
      seconds: 0
    }
  },
  computed: {
    minutesWithZero() {
      return this.minutes.toString().padStart(2, '0')
    },
    secondsWithZero() {
      return this.seconds.toString().padStart(2, '0')
    }
  },
  methods: {
    cancelTimer() {
      clearInterval(this.timerId)
      this.minutes = 0
      this.seconds = 0
      this.timerId = undefined
      this.operation = ''
    },
    startTimer() {
      if (this.minutes == 0 && this.seconds == 0) {
        this.cancelTimer()
        return false
      }
      if (this.minutes > 0 && this.seconds == 0) {
        this.minutes -= 1
        this.seconds = 59
        return true
      }
      if (this.seconds > 0) {
        this.seconds -= 1
      }
    },
    startPomodoro() {
      this.operation = 'pomodoro'
      this.minutes = 25
      this.seconds = 0
      this.timerId = setInterval(this.startTimer, 1000);
    },
    startShortBreak() {
      this.operation = 'short-break'
      this.minutes = 5
      this.seconds = 0
      this.timerId = setInterval(this.startTimer, 1000);
    },
    startLongBreak() {
      this.operation = 'long-break'
      this.minutes = 15
      this.seconds = 0
      this.timerId = setInterval(this.startTimer, 1000);
    },
    showButton(operationButton) {
      return this.operation == '' || this.operation == operationButton
    },
    disableButton(operationButton) {
      return this.operation == operationButton
    }
  }
}
</script>