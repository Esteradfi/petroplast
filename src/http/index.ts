import axios from "axios";

export const API_URL = 'https://petroplast.ru/api/main';
export const API_MAIL_URL = 'https://petroplast.ru/api';

const $api = axios.create({
    baseURL: API_URL,
})


export const $apiMail = axios.create({
    baseURL: API_MAIL_URL
})

export default $api;