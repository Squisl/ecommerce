import getDigit from "./getDigit"

export default async (url, method = "GET", body = {}) => {
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
  const response = await fetch(url, options)
  console.log("RESPONSE:", response.status)
  const data = await response.json()
  if (response.ok) {
    return data
  } else if (getDigit(response.status, 1) === 4) {
    throw data
  }
}
