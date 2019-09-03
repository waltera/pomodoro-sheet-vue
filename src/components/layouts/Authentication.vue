<template>
  <b-form class="form-signin" @submit="onSubmit" @submit.prevent>
    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>

    <b-alert :show="error != ''" variant="danger">{{error}}</b-alert>

    <label for="inputEmail" class="sr-only">Email address</label>
    <input
      v-model="user.email"
      type="email"
      id="inputEmail"
      class="form-control"
      placeholder="Email address"
      required autofocus />

    <label for="inputPassword" class="sr-only">Password</label>
    <input
      v-model="user.password"
      type="password"
      id="inputPassword"
      class="form-control"
      placeholder="Password"
      required />

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>

    <b-button type="submit" variant="primary">Sign in</b-button>
  </b-form>
</template>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>

<script>
import TokenService from 'services/tokens'

export default {
  data() {
    return {
      error: '',
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      TokenService.createPassword(this.user).then(response => {
          localStorage.setItem('token', response.data.access_token)
          this.$emit('update-layout')
        }).catch(error => {
          this.error = 'Informações inválidas'
        })
    }
  }
}
</script>