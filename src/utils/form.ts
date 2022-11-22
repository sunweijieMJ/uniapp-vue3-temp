/**
 * @description 表单验证相关
 */
const formData = {
  /**
   * @description 常用的正则表达式
   */
  regexp: {
    /**
     * @description 不能为空
     */
    requied: /\S/,
    /**
     * @description 非法字符
     */
    illegal:
      /[`~!@#$%^&*()+<>?:"{},/;'[\]]|[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im,
    /**
     * @description 正整数
     */
    positiveInteger: /^[1-9]\d*$/,
    /**
     * @description 邮箱
     */
    email: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/i,
    /**
     * @description 密码
     */
    password: /^[a-zA-Z0-9]{6,8}$/i,
    /**
     * @description 手机号
     */
    phone: /^1\d{10}$/,
    /**
     * @description 固定电话
     */
    tel: /^\d{3}-\d{7,8}|\d{4}-\d{7,8}$/,
    /**
     * @description 传真
     */
    fax: /^(?:\d{3,4}-)?\d{7,8}(?:-\d{1,6})?$/,
    /**
     * @description 数字
     */
    num: /^\d+$/i,
    /**
     * @description 编码
     */
    code: /^[0-9a-zA-Z_-]+$/,
    /**
     * @description 名称
     */
    name: /^[a-zA-Z0-9\u4e00-\u9fa5-_*/【】[\]\s]+$/,
    /**
     * @description 只有空格
     */
    onlySpaces: /^\s+$/,
    /**
     * @description 图形验证码
     */
    picCode: /^[a-zA-Z0-9]{6,6}$/i,
    /**
     * @description 短信验证码
     */
    smsCode: /^[0-9]{6,6}$/i,
    /**
     * @description 邮政编码
     */
    zipCode: /^[0-9]{6}$/,
    /**
     * @description 手机号(加区号)
     */
    areaPhone: /^((\+?86)|(\+?96)|(\+?06))?1\d{10}$/,
    /**
     * @description 中文、英文字母
     */
    cnEn: /^[\u4e00-\u9fa5a-zA-Z]+$/i,
    /**
     * @description 条形码
     */
    ascII: /^[\x00-\x7F]+$/i,
    /**
     * @description 身份证
     */
    idCard:
      /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/,
  },
};

export default formData;
