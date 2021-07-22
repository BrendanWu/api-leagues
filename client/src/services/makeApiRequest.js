import axios from "axios";
import { BASE_URL } from "../constants";

const makeApiRequest = (endpoint, method, body, token) => {
  const options = {
    url: `${BASE_URL}/api/${endpoint}`,
    method,
    headers: { 
      idtoken: token,
      liftedapp: "leagues",
      ContentType:"application/json"
    },
    data:body
  };
  return axios(options);
};

export default makeApiRequest;
