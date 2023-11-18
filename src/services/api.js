import axios from "axios";

export const api = axios.create({
   baseURL: "https://rocketnote-api-8yb2.onrender.com"
});