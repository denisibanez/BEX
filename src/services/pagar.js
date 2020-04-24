import axios from 'axios'

export default class pagarService {
  pagar(param) {
    const request = axios.post('https://teste-api/pagar', param)
      .then(response => response)
      .catch(e => {
        throw e
      }).finally(() => {

      })
    return request
  }
}
