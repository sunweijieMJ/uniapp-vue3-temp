// 请求计数
let requestCount = 0;

const startLoading = () => {
  uni.showLoading({
    title: '加载中',
    mask: true,
  });
};

const closeLoading = () => {
  uni.hideLoading();
};

const tryCloseLoading = () => {
  if (requestCount === 0) {
    closeLoading();
  }
};
const showFullScreenLoading = () => {
  if (requestCount === 0) {
    startLoading();
  }
  requestCount++;
};

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
