import axios from "axios";

axios.defaults.baseURL = "https://pp5-q20-adf89388b6ef.herokuapp.com/"
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;