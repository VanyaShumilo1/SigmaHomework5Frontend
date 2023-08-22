import axios from 'axios'
import backendUrl from "./utils/backendUrl";

const instance = axios.create({
    baseURL: backendUrl
})

export default instance