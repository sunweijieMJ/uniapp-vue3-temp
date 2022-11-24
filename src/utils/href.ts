import { queryConcat } from './tools';

/**
 * 关闭所有页面，打开到应用内的某个页面
 * @param {string} url
 */
const reLaunch = (url: string) => {
  return new Promise((resolve, reject) => {
    uni.reLaunch({
      url,
      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      },
    });
  });
};

/**
 * 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
 * @param {string} url
 */
const switchTab = (url: string) => {
  return new Promise((resolve, reject) => {
    uni.switchTab({
      url,
      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      },
    });
  });
};

/**
 * 保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面
 * @param {string} url
 * @param {Record<string, string>} data
 * @param {UniNamespace.NavigateToOptions['animationType']} animationType
 * @param {UniNamespace.NavigateToOptions['animationDuration']} animationDuration
 * @param {UniNamespace.NavigateToOptions['events']} events
 */
const navigateTo = (
  url: string,
  data?: Record<string, string>,
  animationType?: UniNamespace.NavigateToOptions['animationType'],
  animationDuration?: UniNamespace.NavigateToOptions['animationDuration'],
  events?: UniNamespace.NavigateToOptions['events']
) => {
  return new Promise((resolve, reject) => {
    uni.navigateTo({
      url: data ? `${url}?${queryConcat(data)}` : url,
      animationType,
      animationDuration,
      events,
      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      },
    });
  });
};

/**
 * 关闭当前页面，跳转到应用内的某个页面
 * @param {string} url
 * @param {Record<string, string>} data
 */
const redirectTo = (url: string, data?: Record<string, string>) => {
  return new Promise((resolve, reject) => {
    uni.redirectTo({
      url: data ? `${url}?${queryConcat(data)}` : url,
      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      },
    });
  });
};

/**
 * 关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages() 获取当前的页面栈，决定需要返回几层
 * @param {UniNamespace.NavigateBackOptions['delta']} delta 返回的页面数，如果 delta 大于现有页面数，则返回到首页
 * @param {UniNamespace.NavigateBackOptions['animationType']} animationType 窗口关闭的动画效果
 * @param {UniNamespace.NavigateBackOptions['animationDuration']} animationDuration 窗口关闭动画的持续时间，单位为 ms
 */
const navigateBack = (
  delta?: UniNamespace.NavigateBackOptions['delta'],
  animationType?: UniNamespace.NavigateBackOptions['animationType'],
  animationDuration?: UniNamespace.NavigateBackOptions['animationDuration']
) => {
  return new Promise((resolve, reject) => {
    uni.navigateBack({
      delta,
      animationType,
      animationDuration,
      success(res) {
        resolve(res);
      },
      fail(err) {
        reject(err);
      },
    });
  });
};

export { reLaunch, switchTab, navigateTo, redirectTo, navigateBack };
