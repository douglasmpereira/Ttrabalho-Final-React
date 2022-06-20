import axios from 'axios';

const api = axios.create({
    baseURL: 'https://62abfe6dbd0e5d29af18c56d.mockapi.io/serratec/tere03/'
    //CASO NECESSÁRIO, PASSAR O TOKEN
    //headers: {"Authorization" : "TOKEN"}
})

export default api;