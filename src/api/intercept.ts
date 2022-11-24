import {
  showFullScreenLoading,
  tryHideFullScreenLoading,
} from '@/utils/loading';

const interceptor = {
  invoke(args: any) {
    if (args?.header?.showLoading) {
      showFullScreenLoading();
    }
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
