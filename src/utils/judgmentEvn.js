const isTest = window.location.host.includes('local');
export const isProduct = process.env.NODE_ENV === 'production';
export const VUE_APP_BASE_API = isProduct? '' : 'http://batrix-a-local.cztv.com';
export const VUE_APP_VIEW_API = (isTest || !isProduct)? 'http://10.30.10.158/view/#/mt?id=' : 'http://10.30.10.125/view/#/mt?id=';
export const VUE_APP_REQUEST1_API = (isTest || !isProduct)? 'http://10.30.10.71:8080' : 'http://10.30.10.125';
export const VUE_APP_REQUEST2_API = (isTest || !isProduct)? 'http://10.30.10.158/adm/fusion' : 'http://10.30.10.1/adm/fusion';
export const VUE_APP_REQUEST3_API = (isTest || !isProduct)? 'http://10.30.10.158/api' : 'http://10.30.10.1/api';
export const VUE_APP_XLY_API = (isTest || !isProduct)? 'http://dev-a.cztvcloud.com' : 'https://a.cztvcloud.com';
export const VUE_APP_STATIS = (isTest || !isProduct)? 'http://algo-api-dev.cztv.com' : 'http://algo.cztv.com';
