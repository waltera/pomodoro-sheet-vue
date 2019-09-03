import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://pomodoro-sheet-api.herokuapp.com',
  transformRequest: [function (data, headers) {
    headers['Authorization'] = 'Bearer ' + localStorage.getItem('token')
    return JSON.stringify(data)
  }],
  headers: {
    'Content-Type': 'application/json'
  }
})

export default instance