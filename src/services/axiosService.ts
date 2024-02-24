import axios, { AxiosInstance } from "axios";
import {baseURL} from "../configs";


const axiosService: AxiosInstance = axios.create({ baseURL });

export { axiosService };
