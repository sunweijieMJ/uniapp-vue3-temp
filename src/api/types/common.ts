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

export interface WxLogin {
  jsCode: string;
  registerMethod: string;
}

export interface WxPay {
  orderId: string;
  payChannel: string;
  tradeType: string;
  openId: string;
}
