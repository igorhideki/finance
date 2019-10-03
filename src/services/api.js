import axios from 'axios'

const api = axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  baseURL: 'https://api.hgbrasil.com'
})

export default api
