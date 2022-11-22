/**
 * axios基础构建
 * @date 2021-4-9
 */

import translUrlDict from './config';
import interceptor from './intercept';
import type { CustomRequestConfig, CustomResponseConfig } from './types';
import i18n from '@/plugin/i18n';
import storage from '@/utils/storage';

class Abstract {
  protected baseURL = 'https://demo-bapi-digizen.lianwei.com.cn/';

  protected timeout = 60000;

  protected dataType = 'json';

  protected responseType = 'text';

  protected header: Record<string, any> = {
    ContentType: 'application/json',
  };

  private apiAxios({
    baseURL = this.baseURL,
    header,
    method,
    url,
    urlDict,
    data,
    responseType,
  }: CustomRequestConfig): Promise<CustomResponseConfig> {
    const newHeader = {
      showLoading: true,
      token: storage.getStorageSync('token'),
      'x-language': storage.get('curLanguage'),
      ...header,
    };

    // url字典解析
    if (!url) {
      if (Array.isArray(urlDict)) {
        url = translUrlDict(...urlDict);
      } else {
        url = translUrlDict(urlDict);
      }
    }
    // 拼接baseURL
    const joinUrl = baseURL + url;

    return new Promise((resolve, reject) => {
      // 请求拦截器
      uni.addInterceptor('request', interceptor);
      // 发送请求
      uni.request({
        header: newHeader,
        method,
        url: joinUrl,
        data,
        responseType,
        timeout: this.timeout,
        dataType: this.dataType,
        success(response) {
          // 200:服务端业务处理正常结束
          if (response.statusCode === 200) {
            resolve({
              status: true,
              message: 'success',
              data: response.data,
              response,
            });
          } else {
            resolve({
              status: false,
              message: `${i18n.global.t('api.fail')}`,
              data: response.data,
              response,
            });
          }
        },
        fail(err) {
          const message = err.errMsg;
          uni.showToast({ title: message });
          // eslint-disable-next-line
          reject({ status: false, message, data: null, response: err });
        },
      });
    });
  }

  /**
   * GET类型的网络请求
   */
  protected getReq({
    baseURL,
    header,
    url,
    urlDict,
    data,
    responseType,
  }: CustomRequestConfig) {
    return this.apiAxios({
      baseURL,
      header,
      method: 'GET',
      url,
      urlDict,
      data,
      responseType,
    });
  }

  /**
   * POST类型的网络请求
   */
  protected postReq({
    baseURL,
    header,
    url,
    urlDict,
    data,
    responseType,
  }: CustomRequestConfig) {
    return this.apiAxios({
      baseURL,
      header,
      method: 'POST',
      url,
      urlDict,
      data,
      responseType,
    });
  }

  /**
   * PUT类型的网络请求
   */
  protected putReq({
    baseURL,
    header,
    url,
    urlDict,
    data,
    responseType,
  }: CustomRequestConfig) {
    return this.apiAxios({
      baseURL,
      header,
      method: 'PUT',
      url,
      urlDict,
      data,
      responseType,
    });
  }

  /**
   * DELETE类型的网络请求
   */
  protected deleteReq({
    baseURL,
    header,
    url,
    urlDict,
    data,
    responseType,
  }: CustomRequestConfig) {
    return this.apiAxios({
      baseURL,
      header,
      method: 'DELETE',
      url,
      urlDict,
      data,
      responseType,
    });
  }
}

export default Abstract;
