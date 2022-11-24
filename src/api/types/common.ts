/**
 * 微信注册接口
 */
export interface WxRegister {
  jsCode: string;
  registerMethod: string;
  phoneNumber: string;
  encryptedData: string;
  iv: string;
  avatarUrl: string;
  nickName: string;
  gender: number;
  registerChannel: number;
}

/**
 * 微信登录接口
 */
export interface WxLogin {
  jsCode: string;
  registerMethod: string;
}

/**
 * 微信支付接口
 */
export interface WxPay {
  orderId: string;
  payChannel: string;
  tradeType: string;
  openId: string;
}
