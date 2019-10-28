const retrieve = (url, method = "GET", body = {}) => {
  const options = {method, headers: {}, credentials: "include"}
  const token = localStorage.getItem("accessToken")
  if (token) {
    options.headers = {
      Authorization: token,
    }
  }
  if (method === "POST" || method === "PUT") {
    options.headers = {
      ...options.headers,
      "Content-Type": "application/json",
    }
    options.body = JSON.stringify(body)
  }
  console.log("Options: ", options)
  return fetch(url, options)
    .then(response => response.json())
    .catch(error => console.error(error))
}

module.exports = retrieve
