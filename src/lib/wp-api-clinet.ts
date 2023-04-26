import axios from 'axios';
const baseURL = process.env.NEXT_PUBLIC_APP_API_ENDPOINT || '';

/**
 * FrontApiClient
 * ## 責務
 * 1. フロント(Next)からNextAPIルートへリクエストを送る(クライアント側で実行される)
 */

const headers = {
  'Content-Type': 'application/json'
};

export const WpApiClient = axios.create({ baseURL, headers });

// レスポンスのインターセプター
WpApiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    switch (error?.response?.status) {
      case 401:
        break;
      case 404:
        break;
      default:
        console.log('== internal server error');
    }

    const errorMessage = (error.response?.data?.message || '').split(',');
    return { errors: errorMessage, message: 'error message' };
  }
);
