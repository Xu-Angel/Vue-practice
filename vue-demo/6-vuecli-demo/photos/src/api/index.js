export function apiLogin ({ username, password }) {
  return new Promise(resolve => {
    const xhr = new XMLHttpRequest()
    xhr.open('post', 'http://localhost:8081/login')
    xhr.send(JSON.stringify({
      username,
      password
    }))
    xhr.onload = function () {
      resolve(JSON.parse(xhr.responseText))
    }
  })
}
