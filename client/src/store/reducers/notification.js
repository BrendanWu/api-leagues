const initialState = {
    toast: {
        message: "Welcome to Leagues",
        type: "dark",
    }
}

export default function notificationReducer(state=initialState, action) {
    const {type,payload} = action;
    switch(type){
        case "SET_TOAST":
            return {
                ...state,
                toast: {
                    message: payload.message,
                    type: payload.type
                },
            }
        case "CLEAR_TOAST":
            return {
                ...state,
                toast:null
            }
        default:
            return state;
    }
}