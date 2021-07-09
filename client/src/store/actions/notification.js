
export const setToast = (message, type) => ({
    type: "SET_TOAST",
    payload: {
        message,
        type
    }
})

export const clearToast = () => ({
    type: "CLEAR_TOAST"
})