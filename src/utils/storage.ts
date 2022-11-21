/**
 * 存储封装对外提供统一的方法
 */

interface TemplateData {
  environment: string;
  isiPhoneX: boolean;
  statusBarHeight: string;
  titleBarHeight: string;
  navbarHeight: string;
  lang: string;
}

class StorageApi {
  // 存储半永久数据
  static storageKey = [
    'token', // token认证
    'openId', // openId
    'userInfo', // userInfo
  ];

  // 储存临时数据
  static templateData: Partial<TemplateData> = {
    environment: uni.getSystemInfoSync().uniPlatform, // 平台信息
    isiPhoneX: false, // 是否iPhoneX
    statusBarHeight: '', // 顶部状态栏高度
    titleBarHeight: '', // 自定义导航栏高度
    navbarHeight: '', // 导航栏总高度
    lang: 'zh-CN', // 语言
  };

  /**
   * 设置基础类型的数据
   * @param {string | required} key
   * @param {any | required} data
   */
  set(key: keyof TemplateData, data: any) {
    if (key in StorageApi.templateData) {
      StorageApi.templateData[key] = data;
    }
  }

  /**
   * 获取基础类型的数据
   * @param {string | required} key
   */
  get(key: keyof TemplateData) {
    if (key in StorageApi.templateData) {
      return StorageApi.templateData[key];
    }
  }

  /**
   * 将数据异步存储在本地缓存中指定的key中
   * @param {string | required} key
   * @param {any | required} data
   */
  setStorage<T = any>(key: string, data: T) {
    return new Promise<T>((resolve, reject) => {
      if (StorageApi.storageKey.includes(key)) {
        uni.setStorage({
          key,
          data,
          success(res) {
            resolve(res);
          },
          fail(err) {
            reject(err);
          },
        });
      } else {
        // eslint-disable-next-line
        reject({ errMsg: 'setStorage:err' });
      }
    });
  }

  /**
   * 将数据同步存储在本地缓存中指定的key中
   * @param {string | required} key
   */
  setStorageSync<T = any>(key: string, data: T) {
    return uni.setStorageSync(key, data);
  }

  /**
   * 从本地缓存中异步获取指定key的内容
   * @param {string | required} key
   */
  getStorage(key: string) {
    return new Promise<any>((resolve, reject) => {
      if (StorageApi.storageKey.includes(key)) {
        uni.getStorage({
          key,
          success(res) {
            resolve(res);
          },
          fail(err) {
            reject(err);
          },
        });
      } else {
        // eslint-disable-next-line
        reject({ errMsg: 'setStorage:err' });
      }
    });
  }

  /**
   * 异步获取当前 storage 的相关信息
   * @param {string | required} key
   */
  getStorageSync(key: string) {
    return uni.getStorageSync(key);
  }

  /**
   * 同步获取当前 storage 的相关信息
   */
  getStorageInfo() {
    return new Promise<any>((resolve, reject) => {
      uni.getStorageInfo({
        success(res) {
          resolve(res);
        },
        fail(err) {
          reject(err);
        },
      });
    });
  }

  /**
   * 从本地缓存中同步获取指定key的内容
   */
  getStorageInfoSync() {
    return uni.getStorageInfoSync();
  }

  /**
   * 从本地缓存中异步移除指定 key
   * @param {string | required} key
   */
  removeStorage(key: string) {
    return new Promise((resolve, reject) => {
      if (StorageApi.storageKey.includes(key)) {
        uni.removeStorage({
          key,
          success(res) {
            resolve(res);
          },
          fail(err) {
            reject(err);
          },
        });
      } else {
        // eslint-disable-next-line
        reject({ errMsg: 'setStorage:err' });
      }
    });
  }

  /**
   * 从本地缓存中同步移除指定 key
   * @param {string | required} key
   */
  removeStorageSync(key: string) {
    return uni.removeStorageSync(key);
  }

  /**
   * 异步清理本地数据缓存
   */
  clearStorage() {
    return uni.clearStorage();
  }

  /**
   * 同步清理本地数据缓存
   */
  clearStorageSync() {
    return uni.clearStorageSync();
  }
}

// 单列模式返回对象
let instance;
export default (() => {
  if (instance) return instance;
  instance = new StorageApi();
  return instance;
})();
