import axios from 'axios'
import { API_ROOT } from 'Apis/utils'
const token = JSON.parse(localStorage.getItem('auth-token-admin'))
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFjMjM5ZjUwNjU1YjZhNjc3ODcxOGYiLCJyb2xlIjoiTUFOQUdFTUVOVCIsInVzZXJuYW1lIjoia2FzczJrMSIsImVtYWlsIjoia2FzczJrMUBnbWFpbC5jb20iLCJpYXQiOjE3MDU3ODE0MjR9.gGF7RHhU0TCMPW7842H5-5_XsFjBOlMpmwqEmPuIEvA'
export const bookingCar = async (data) => {
    const req = await axios.post(`${API_ROOT}/v1/order/createOrder`, data)
    return req.data
}

export const fetchListOfOrder = async (countPage) => {
    const req = await axios.get(`${API_ROOT}/v1/order/orderForAdmin`, { params: { count: countPage }, headers: { 'auth-token-admin': token } })
    return req.data
}

export const fetchUpdateOrder = async (orderId, data) => {
    const req = await axios.put(`${API_ROOT}/v1/order/orderForAdmin/${orderId}`,data, { headers: { 'auth-token-admin': token } })
    return req.data
}

export const fetchSearchOrder = async (data, countPage) => {
    const req = await axios.get(`${API_ROOT}/v1/order/searchOrder`, { params: { ...data, count: countPage }, headers: { 'auth-token-admin': token } })
    return req.data
}

export const loginUser = async (phoneNumber, password) => {
    const req = await axios.get(`${API_ROOT}/v1/user/login/${phoneNumber}/${password}`)
    return req.data
}

export const registerUser = async (data) => {
    const req = await axios.post(`${API_ROOT}/v1/user/accountUser`, data)
    return req.data
}

export const fetchListOfUser = async (countPage) => {
    const req = await axios.get(`${API_ROOT}/v1/user/accountUserForAdmin`, { params: { count: countPage }, headers: { 'auth-token-admin': token } })
    return req.data
}

export const fetchUpdateUser = async (phoneNumber, data) => {
    const req = await axios.put(`${API_ROOT}/v1/user/accountUserForAdmin/${phoneNumber}`,data, { headers: { 'auth-token-admin': token } })
    return req.data
}

export const fetchSearchUser = async (data, countPage) => {
    const req = await axios.get(`${API_ROOT}/v1/user/searchAccountUser`, { params: { ...data, count: countPage }, headers: { 'auth-token-admin': token } })
    return req.data
}

export const fetchBlackListUser = async (data) => {
    const req = await axios.post(`${API_ROOT}/v1/blackList/blackListAccountUser`, data, { headers: { 'auth-token-admin': token } })
    return req.data
}

export const fetchInformationBlackListUser = async (phoneNumber) => {
    const req = await axios.get(`${API_ROOT}/v1/blackList/blackListAccountUserForAdmin/${phoneNumber}`, { headers: { 'auth-token-admin': token } })
    return req.data
}

export const fetchListOfBlackListUser = async (countPage) => {
    const req = await axios.get(`${API_ROOT}/v1/blackList/blackListAccountUserForAdmin`, { params: { count: countPage }, headers: { 'auth-token-admin': token } })
    return req.data
}

export const fetchSearchBlackListUser = async (data, countPage) => {
    const req = await axios.get(`${API_ROOT}/v1/blackList/searchBlackListAccountUser`, { params: { ...data, count: countPage }, headers: { 'auth-token-admin': token } })
    return req.data
}

export const fetchUpdateBlackListUser = async (phoneNumber, data) => {
    const req = await axios.put(`${API_ROOT}/v1/blackList/blackListAccountUserForAdmin/${phoneNumber}`,data, { headers: { 'auth-token-admin': token } })
    return req.data
}

export const fetchCreateNotice = async (data) => {
    const req = await axios.post(`${API_ROOT}/v1/notice/createNotice`, data)
    return req.data
}

export const fetchListOfNotice = async () => {
    const req = await axios.get(`${API_ROOT}/v1/notice/noticeForAdmin`, { headers: { 'auth-token-admin': token } })
    return req.data
}

export const fetchPostIP = async () => {
    const req = await axios.post(`${API_ROOT}/v1/ip/ipUser`)
    return req.data
}

export const fetchListIP = async (countPage) => {
    const req = await axios.get(`${API_ROOT}/v1/ip/ipList`, { params: { count: countPage }, headers: { 'auth-token-admin': token } })
    return req.data
}

export const fetchSearchIp = async (data, countPage) => {
    const req = await axios.get(`${API_ROOT}/v1/ip/searchIpList`, { params: { ...data, count: countPage }, headers: { 'auth-token-admin': token } })
    return req.data
}

export const fetchLoginAdmin = async (username, password) => {
    const req = await axios.get(`${API_ROOT}/v1/admin/login/${username}/${password}`)
    return req.data
}

export const fetchUpdateNotice = async (data) => {
    const req = await axios.put(`${API_ROOT}/v1/notice/noticeForAdmin`, data, { headers: { 'auth-token-admin': token } })
    return req.data
}

export const fetchWebsite = async () => {
    const req = await axios.get(`${API_ROOT}/v1/website/websiteInformation`)
    return req.data
}

export const fetchUpdateWebsite = async (data) => {
    const req = await axios.put(`${API_ROOT}/v1/website/websiteInformation`, data, { headers: { 'auth-token-admin': token } })
    return req.data
}