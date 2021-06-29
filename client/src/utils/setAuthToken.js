import axios from "axios";

// token set in http headers
const setAuthToken = (token) => {
  if (token) {
    // set jwt token in http headers
    axios.defaults.headers.common["x-access-token"] = token;
  } else {
    // delete jwt token from http headers
    delete axios.defaults.headers.common["x-access-token"];
  }
};

export default setAuthToken;
