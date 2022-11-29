import i18n from '@/plugin/i18n';

// 请求计数
let requestCount = 0;

/**
 * @description 开启loading
 */
const startLoading = () => {
  uni.showLoading({
    title: i18n.global.t('api.loading'),
    mask: true,
  });
};

/**
 * @description 关闭loading
 */
const closeLoading = () => {
  uni.hideLoading();
};

/**
 * @description 关闭loading(合并重复操作)
 */
const tryCloseLoading = () => {
  if (requestCount === 0) {
    closeLoading();
  }
};

/**
 * @description 开启loading(合并重复操作)
 */
const showFullScreenLoading = () => {
  if (requestCount === 0) {
    startLoading();
  }
  requestCount++;
};

/**
 * @description 关闭loading(合并重复操作并设置延迟)
 */
const tryHideFullScreenLoading = () => {
  if (requestCount <= 0) return;
  requestCount--;
  if (requestCount === 0) {
    // 300ms间隔内的loading合并为一次
    setTimeout(tryCloseLoading, 300);
  }
};

export {
  startLoading,
  closeLoading,
  tryCloseLoading,
  showFullScreenLoading,
  tryHideFullScreenLoading,
};
