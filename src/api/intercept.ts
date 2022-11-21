import {
  showFullScreenLoading,
  tryHideFullScreenLoading,
} from '@/utils/loading';

const interceptor = {
  invoke() {
    showFullScreenLoading();
  },
  success() {
    //
  },
  fail() {
    //
  },
  complete() {
    tryHideFullScreenLoading();
  },
};

export default interceptor;
