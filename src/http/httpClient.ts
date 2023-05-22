import axios from 'axios';

export type SendFn<T = void> = (request: {
  method: string;
  url: string;
  queryParameter?: any;
  urlParameter?: any;
  headerParameter?: any;
  cookieParameter?: any;
  body?: any;
}) => Promise<T>;

const buildQuery = (queryParameter: any) => {
  if (typeof queryParameter === 'undefined') {
    return '';
  }
  const result: Array<string> = [];
  Object.entries(queryParameter).forEach(([key, value]) => {
    const safeKey = encodeURIComponent(key);
    if (Array.isArray(value)) {
      value.forEach((v) => {
        result.push(`${safeKey}=${encodeURIComponent(v)}`);
      });
    } else {
      result.push(`${safeKey}=${encodeURIComponent(value as any)}`);
    }
  });
  return `?${result.join('&')}`;
};

const buildUrl = (url: string, urlParameter: any) => {
  let result = url;
  if (typeof urlParameter === 'undefined') {
    return result;
  }
  Object.entries(urlParameter).forEach(([key, value]) => {
    result = result.replace(`{${key}}`, value as string);
  });
  return result;
};

export const httpClient = (baseUrl: string, headers: any = {}): SendFn<any> => {
  return async (request) => {
    const query = buildQuery(request.queryParameter);
    const url = baseUrl + buildUrl(request.url, request.urlParameter) + query;
    const response = await axios.request({
      url: url,
      headers: { ...headers, ...request.headerParameter },
      method: request.method,
      data: request.body,
      validateStatus: () => true,
    });
    if (response.status > 399) {
      console.log(
        'request failed ' +
          request.method +
          ':' +
          url +
          ' with status code ' +
          response.status +
          ' ' +
          response.statusText
      );
      console.log('Message ' + JSON.stringify(response.data));
      throw Error('Invalid request');
    }
    if (response.headers['content-type'] === 'application/json') {
      return JSON.parse(response.data);
    }
    return response.data;
  };
};
