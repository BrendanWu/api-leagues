export const setUser = (user) => ({
    type: "SET_USER",
    payload: user
})

export const setToken = (token) => ({
    type: "SET_TOKEN",
    payload: token
})

export const clearAuth = () => ({
    type: "CLEAR_AUTH"
})

