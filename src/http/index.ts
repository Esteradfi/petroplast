import axios from "axios";

export const API_URL = 'https://петропласт.рф/api/main';

const $api = axios.create({
    baseURL: API_URL
})

export default $api;