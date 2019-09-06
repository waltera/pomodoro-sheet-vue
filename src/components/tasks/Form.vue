<template>
  <b-form @submit="onSubmit" @reset="onReset">
    <form-input
      label="Descrição"
      v-model="form.description"
      :errors="errors.description"
    />

    <b-button type="submit" variant="primary">Submit</b-button>
    <b-button type="reset" variant="danger" class="ml-1">Reset</b-button>
  </b-form>
</template>

<script>
import FormInput from 'components/layouts/Input.vue'

export default {
  components: {
    'form-input': FormInput
  },
  props: {
    submitCallback: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      form: {
        description: ''
      },
      errors: {}
    }
  },
  methods: {
    onReset() {
      this.form = {
        description: ''
      }
      this.errors = {}
    },
    onSubmit(evt) {
      evt.preventDefault()
      this.submitCallback(this.form).then(() => {
        this.$router.go(-1)
      }).catch(error => {
        this.errors = error.response.data
      })
    }
  }
}
</script>