import axios from 'axios';
import { Platform } from 'react-native';
import queryString from 'query-string';
import IntentModule from '@/bridges/native';

export const initHttpConfig = () => {
  let httpHost = '';
  if (Platform.OS === 'web') {
    httpHost = '/gateway/mrpay'; // 本地测试使用
  } else {
    httpHost = IntentModule.httpHost;
    httpHost += '/gateway/mrpay';
  }
  axios.defaults.baseURL = httpHost; // 客户端根据不同环境给出完整 api
  axios.defaults.timeout = 60000;
};

/**
 * http request 拦截器
 */
axios.interceptors.request.use(
  (config) => {
    let token = '';
    if (Platform.OS === 'web') {
      // @ts-ignore window 对象仅在 web 环境下存在
      const parsed = queryString.parseUrl(window.location.href);
      // check if it is arr
      token =
        (Array.isArray(parsed.query.sessionValue)
          ? parsed.query.sessionValue[0]
          : parsed.query.sessionValue) ?? '';
    } else {
      token = IntentModule.token;
    }
    config.data = JSON.stringify(config.data);
    config.headers['x-auth-token'] = token;
    config.headers['Content-Type'] = 'application/json';

    console.log('请求体', config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

/**
 * http response 拦截器
 */
axios.interceptors.response.use(
  (response) => {
    if (response.data.errCode === 2) {
      console.log('过期');
    }
    return response;
  },
  (error) => {
    console.log('请求出错：', error);
  },
);

/**
 *
 * @param url 请求 api
 * @param data
 * @returns
 */
export const post = <T, U>(url: string, data?: T): Promise<U> => {
  return new Promise((resolve, reject) => {
    axios.post(url, data ?? {}).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        reject(err);
      },
    );
  });
};
