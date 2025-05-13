import axios from "axios"
import { baseurl } from "./Apiurl";

let axiosInstances=axios.create({
    baseURL:baseurl
})
export default axiosInstances