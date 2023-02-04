export function isAuthenticated() {
  return window.localStorage.getItem('token') === 'token123'
}

export function authenticate() {
  window.localStorage.setItem('token', 'token123')
}

export function logout() {
  window.localStorage.removeItem('token')
}
