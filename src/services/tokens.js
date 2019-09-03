import axios from './axios'

const url = '/oauth/token'

export default {
  createPassword(user) {
    return axios.post(url, {
      "grant_type": "password",
      "username": user.email,
      "password": user.password
    })
  }
}