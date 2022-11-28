/**
 * 存储封装对外提供统一的方法
 */

class StorageApi {
  /**
   * 存储半永久数据
   */
  static storageKey = [
    'token', // token认证
    'userInfo', // userInfo
  ];

  /**
   * 储存临时数据
   */
  static templateData = {
    uniPlatform: uni.getSystemInfoSync().uniPlatform, // 平台信息
    isiPhoneX: false, // 是否iPhoneX
    curLanguage: 'zh-CN', // 语言
  };

  /**
   * 设置基础类型的数据
   * @param {string} key
   * @param {any} data
   */
  set<T extends keyof typeof StorageApi.templateData>(
    key: T,
    data: typeof StorageApi.templateData[T]
  ) {
    if (key in StorageApi.templateData) {
      StorageApi.templateData[key] = data;
    } else {
      console.error('set:err');
    }
  }

  /**
   * 获取基础类型的数据
   * @param {string} key
   */
  get<T extends keyof typeof StorageApi.templateData>(key: T) {
    if (key in StorageApi.templateData) {
      return StorageApi.templateData[key];
    }
    console.error('get:err');
  }

  /**
   * 将数据异步存储在本地缓存中指定的key中
   * @param {string} key
   * @param {any} data
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
   * @param {string} key
   */
  setStorageSync<T = any>(key: string, data: T) {
    if (StorageApi.storageKey.includes(key)) {
      return uni.setStorageSync(key, data);
    }
    console.error('setStorageSync:err');
  }

  /**
   * 从本地缓存中异步获取指定key的内容
   * @param {string} key
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
   * @param {string} key
   */
  getStorageSync(key: string) {
    if (StorageApi.storageKey.includes(key)) {
      return uni.getStorageSync(key);
    }
    console.error('getStorageSync:err');
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
   * @param {string} key
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
   * @param {string} key
   */
  removeStorageSync(key: string) {
    if (StorageApi.storageKey.includes(key)) {
      return uni.removeStorageSync(key);
    }
    console.error('removeStorageSync:err');
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
