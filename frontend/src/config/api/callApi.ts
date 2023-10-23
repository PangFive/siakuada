import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';
// import { useDispatch } from "@/store/hooks";
// import { changeAuth } from '@/store/apps/auth/authSlice';

interface CallAPIProps extends AxiosRequestConfig {
  token?: boolean;
  serverToken?: string;
}

export default async function callAPI({ url, method, data, token, serverToken }: CallAPIProps) {

  // const dispatch = useDispatch();

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
        "x-access-token": `${jwtToken}`,
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

  // if (response.status === 401) {

  // dispatch(changeAuth(false));

  // }

  return response;
}
