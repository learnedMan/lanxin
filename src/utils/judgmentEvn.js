const isTest = window.location.host.includes('local');
export const isProduct = process.env.NODE_ENV === 'production';
export const VUE_APP_BASE_API = isProduct? '' : 'http://batrix-a-local.cztv.com';
export const VUE_APP_VIEW_API = (isTest || !isProduct)? 'http://10.30.10.158/view/#/mt?id=' : 'https://p-internal.cztv.com/view/#/mt?id=';
export const VUE_APP_REQUEST1_API = (isTest || !isProduct)? 'http://10.30.10.71:8080' : 'https://p-internal.cztv.com';
export const VUE_APP_REQUEST2_API = (isTest || !isProduct)? 'https://p-internal.cztv.com/adm/fusion' : 'https://p-internal.cztv.com/adm/fusion';
export const VUE_APP_REQUEST3_API = (isTest || !isProduct)? 'http://10.30.10.158/api' : 'https://p-internal.cztv.com/api';
export const VUE_APP_XLY_API = (isTest || !isProduct)? 'http://dev-a.cztvcloud.com' : 'https://a.cztvcloud.com';
export const VUE_APP_STATIS = (isTest || !isProduct)? 'http://algo-api-dev.cztv.com' : 'https://algo.cztv.com';
