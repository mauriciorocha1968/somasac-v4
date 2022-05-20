import axios from "axios"
import { parseCookies } from 'nookies'

export function getAPIClient(ctx?: any) {
    const { 'somaSac.token': token } = parseCookies(ctx)

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_REACT_APP_API_URL
})

api.interceptors.request.use(config => {
  console.log('Axios config ==>',config);

  return config;
})

if(token){
  api.defaults.headers['Authorization'] = `Bearer ${token}`
}

return api
}