import Cookies from 'js-cookie'
// 获取cookie
export function getToken(TokenKey) {
  return JSON.parse(Cookies.get(TokenKey))
}
// 设置cookie
export function setToken(TokenKey,token) {
  return Cookies.set(TokenKey, token)
}
// 移除cookie
export function removeToken(TokenKey) {
  return Cookies.remove(TokenKey)
}
