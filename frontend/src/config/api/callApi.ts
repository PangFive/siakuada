import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';
import { API_URI } from '../../utils/constant.utils';

interface CallAPIProps extends AxiosRequestConfig {
  token?: boolean;
  serverToken?: string;
}

export default async function callAPI({
  url, method, data, token, serverToken
}: CallAPIProps) {
  let headers = {};
  if (serverToken) {
    headers = {
      "x-access-token": `${serverToken}`,
    };
  } else if (token) {
    const tokenCookies = Cookies.get('token');
    if (tokenCookies) {
      const jwtToken = atob(tokenCookies);
      headers = {
        "x-access-token": `${serverToken}`,
      };
    }
  }

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API
  })

  const response = await api({
    url,
    method,
    data,
    headers,
  }).catch((err) => err.response);

  return response;
}
