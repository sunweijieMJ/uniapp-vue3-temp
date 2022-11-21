/**
 * 基础 API 集合类
 * 集成Abstract
 * @date 2020-5-29
 */
import Abstract from '../abstract';
import type { WxLogin, WxPay, WxRegister } from '../types';

class Basic extends Abstract {
  /**
   * 微信注册
   */
  wxRegister(data: WxRegister) {
    return this.postReq({ urlDict: 'Basic.WxRegister', data });
  }

  /**
   * 微信登录
   */
  wxLogin(data: WxLogin) {
    return this.postReq({ urlDict: 'Basic.WxLogin', data });
  }

  /**
   * 个人信息
   */
  getCustomerProfile() {
    return this.getReq({ urlDict: 'Basic.GetCustomerProfile' });
  }

  /**
   * 微信支付
   */
  wxPay(data: WxPay) {
    return this.postReq({ urlDict: 'Basic.WxPay', data });
  }
}

// 单列模式返回对象
let instance;
export default (() => {
  if (instance) return instance;
  instance = new Basic();
  return instance;
})();
