import axios from 'axios';

const api = axios.create({
    baseURL: 'https://62b08a0fe460b79df04850d0.mockapi.io/api/produtos'
    //CASO NECESSÁRIO, PASSAR O TOKEN
    //headers: {"Authorization" : "TOKEN"}
})

export default api;