import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"
import { sessionToken } from "../../utils/cookie";
import { logout } from "../../utils/logout";

const axios = Axios.create()

axios.interceptors.request.use(config => {
  const token = sessionToken.get()
  token && config.headers && (config.headers["Authorization"] = `Bearer ${token}`)
  return config
})

axios.interceptors.response.use(undefined, (error: AxiosError) => {
  if (error.response?.status === 401) {
    logout()
  }
  return Promise.reject(error)
})


export const get = <R, Params = Record<string, unknown>>(url: string, params?: Params): Promise<AxiosResponse<R>> =>
  axios.get(url, { params })

export const post = <R, Data>(url: string, data?: Data, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> =>
  axios.post(url, data, config)

export const patch = <R, Data>(url: string, data: Data, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> =>
  axios.patch(url, data, config)

export const put = <R, Data>(url: string, data: Data, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> =>
  axios.put(url, data, config)

export const Delete = <R, Data>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> =>
  axios.delete(url, config)