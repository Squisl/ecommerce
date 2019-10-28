import jwt_decode from "jwt-decode"

const refreshToken = store => next => action => {
  console.log("REFRESH TOKEN")
  // Check whether we have an access token
  const token = localStorage.getItem("accessToken")
  // No access token was found
  if (!token) {
    fetch("/api/user/refresh_token", {
      method: "POST",
      credentials: "include",
    })
      .then(response => response.json())
      .then(data => {
        const {ok, accessToken} = data
        console.log("DATA:", data)
        if (ok) {
          localStorage.setItem("accessToken", accessToken)
        }
        console.log("Token: ", accessToken)
        next(action)
      })
  } else {
    try {
      // Check whether access token is expired
      const decoded = jwt_decode(token)
      console.log("EXPIRED:", Date.now().valueOf() / 1000 > decoded.exp)
      if (Date.now().valueOf() / 1000 > decoded.exp) {
        fetch("/api/user/refresh_token", {
          method: "POST",
          credentials: "include",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        })
          .then(response => response.json())
          .then(data => {
            const {ok, accessToken} = data
            console.log("Decoded jwt:", jwt_decode(accessToken))
            console.log("DATA:", data)
            if (ok) {
              localStorage.setItem("accessToken", accessToken)
            }
            // TODO: Logout the user
            console.log("Token: ", accessToken)
            next(action)
          })
      } else {
        next(action)
      }
    } catch (e) {
      console.error(e)
    }
  }
}

export default refreshToken
