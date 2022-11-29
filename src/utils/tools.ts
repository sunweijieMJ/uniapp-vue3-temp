/**
 * @description 解析url
 * @param href
 */
const queryParse = (href: string): Record<string, string> => {
  if (!href) return {};
  const response: Record<string, string> = {};
  href = decodeURIComponent(href);
  const str: string = href.split('?')[1];
  if (!str) return response;
  const strArr = str.split('&');
  for (let i = 0, LEN = strArr.length; i < LEN; i++) {
    response[strArr[i].split('=')[0]] = strArr[i].split('=')[1];
  }
  return response;
};

/**
 * @description url拼接
 * @param query
 */
const queryConcat = (query: Record<string, string>): string => {
  let url = '';
  Object.keys(query).forEach((k) => {
    const value = query[k] !== undefined ? query[k] : '';
    url += `&${k}=${encodeURIComponent(value)}`;
  });
  return url ? url.substring(1) : '';
};

/**
 * @description 解析小程序二维码
 * @param options
 */
const parseCode = (options: Record<string, string>) => {
  let id: string | undefined = '';
  if (options.q) {
    // H5二维码对应调转
    const url = decodeURIComponent(options.q);
    id = url.split('?')[0].split('/').pop();
    const query = queryParse(url);
    if (query.id) id = query.id;
  } else if (options.scene) {
    // 小程序二维码对应调转
    const url = decodeURIComponent(options.scene);
    const query = queryParse(url);
    if (query.product_id) id = query.product_id;
  }

  return id;
};

export { queryParse, queryConcat, parseCode };
