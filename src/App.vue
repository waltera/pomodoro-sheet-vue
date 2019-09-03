<template>
  <div>
    <application-layout v-show="showApp"/>
    <authentication-layout v-show="showLogin" v-on:update-layout="update"/>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

import MeService from 'services/me'

import ApplicationLayout from 'components/layouts/Application.vue'
import AuthenticationLayout from 'components/layouts/Authentication.vue'

export default {
  name: 'app',
  components: {
    'application-layout': ApplicationLayout,
    'authentication-layout': AuthenticationLayout
  },
  data() {
    return {
      showApp: false,
      showLogin: false
    }
  },
  mounted() {
    this.update()
  },
  methods: {
    update() {
      const waiting = Swal.fire({
        title: 'Aguarde!',
        type: 'info',
        allowOutsideClick: false,
        showConfirmButton: false
      })
      MeService.index()
        .then(response => {
          this.showApp = true
          this.showLogin = false
        })
        .catch(error => {
          if(error.response.status == 401) {
            this.showApp = false
            this.showLogin = true
          }
        }).finally(() => { waiting.close() })
    }
  }
}
</script>