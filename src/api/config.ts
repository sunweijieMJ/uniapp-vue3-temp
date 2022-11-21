/**
 * API 相关配置文件
 * API URL Dict api 字典
 */

const urlDict: Record<string, Record<string, string>> = {
  Basic: {
    WxRegister: 'ecommerce/biz/v1/customerChannel/register', // 微信注册
    WxLogin: 'ecommerce/biz/v1/customerChannel/login', // 微信登录
    GetCustomerProfile: 'ecommerce/biz/v1/customerChannel/customerProfile', // 个人信息
    WxPay: 'v1/order/pay/prepay', // 微信支付
  },
};

const template = (str: string, option: Record<string, string>) => {
  if (!str || !option) return str;

  return str.replace(/\{(\w+)\}/g, (_, key) => {
    return option[key];
  });
};

// 翻译url字典
const translUrlDict = (...args: any[]) => {
  const [path, option] = args;

  let value;
  const array = path.split('.');
  let current: Record<string, any> = urlDict;
  for (let i = 0, j = array.length; i < j; i++) {
    const property = array[i];
    value = current[property];
    if (i === j - 1) return template(value, option);
    if (!value) return '';
    current = value;
  }
  return '';
};

export default translUrlDict;
