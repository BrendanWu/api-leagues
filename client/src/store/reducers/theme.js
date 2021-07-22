const initialState = {
    mode: "dark"
}

export default function themeReducer(state=initialState, action) {
    const {type,payload} = action;
    console.log(type,payload);
    switch(type){
        case "SET_MODE":{
            console.log(type, payload);
            return {
                ...state,
                mode: payload
            }
        }
        case "CLEAR_THEME":
            return initialState;
        default:
            return state;
    }
}