import axios from 'axios';

const api = axios.create({
    baseURL: 'https://62b20d19c7e53744afc6c97c.mockapi.io/api'
    //CASO NECESSÁRIO, PASSAR O TOKEN
    //headers: {"Authorization" : "TOKEN"}
})

export default api;