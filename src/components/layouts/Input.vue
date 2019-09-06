<template>
  <b-form-group :label="label">
    <b-form-input
      v-model="inputValue"
      v-on:input="emitChange"
      :state="inputState"
    ></b-form-input>
    <b-form-invalid-feedback>
      {{errors.join(', ')}}
    </b-form-invalid-feedback>
  </b-form-group>
</template>

<script>
export default {
  props: {
    label: {
      type: String
    },
    errors: {
      type: Array,
      default: () => ([])
    }
  },
  data() {
    return {
      inputValue: ''
    }
  },
  computed: {
    inputState() {
      if(this.errors && this.errors.length > 0) {
        return 'invalid'
      }

      return ''
    }
  },
  methods: {
    emitChange(value) {
      this.$emit('input', value)
    }
  }
}
</script>