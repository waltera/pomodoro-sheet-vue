import axios from './axios'

const url = '/tasks'

export default {
  create(task) {
    return axios.post(url, {task})
  }
}