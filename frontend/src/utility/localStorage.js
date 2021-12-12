export const setItem = (key, value) => {
  sessionStorage.setItem(key, value)
}

export const getItem = (key) => {
  return sessionStorage.getItem(key)
}

export const removeItem = (key) => {
  sessionStorage.removeItem(key)
}