/**
 * 包含n个接口请求函数的模块
 * 函数的返回值：promise对象
 */

 import ajax from './ajax';
// 1、根据经纬度获取位置详情， geohash 测试模拟参数
export const reqAddress = (geohash) => ajax('/position/${geohash}');

// 用户名密码登录
// export const reqPwdLogin = (name, pwd) => ajax(url+)