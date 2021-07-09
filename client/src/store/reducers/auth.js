const initialState = {
    loggedIn: false,
    token: null,
    user: null,
    email: null,
    phone_number: null,
    cognitoUsername: null,
  };
  
  export default function authReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case "SET_USER":
        return {
          ...state,
          loggedIn: true,
          user: payload,
          email: payload.attributes.email,
          cognitoUsername: payload.username,
          phone_number: payload.attributes.phone_number,
        };
      case "SET_TOKEN":
        return {
          ...state,
          token: payload,
        };
      case "CLEAR_AUTH":
        return initialState;
  
      default:
        return state;
    }
  }
  