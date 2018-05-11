import axios from "axios";
import config from "./config"
export default axios.create({
  baseURL : 'http://localhost:6969',
  withCredentials : true,
});