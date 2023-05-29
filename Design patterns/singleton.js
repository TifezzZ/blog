/*
 * @Author: TifezzZ
 * @Date: 2023-05
 * @LastEditors: TifezzZ
 * @LastEditTime: 2023-05
 * @Description:
 */
class CreateUser {
  constructor(name) {
    this.name = name;
    this.getName();
  }
  getName() {
    return this.name;
  }
}
// 代理实现单例模式
var ProxyMode = (function () {
  var instance = null;
  return function (name) {
    console.log(instance);
    if (!instance) {
      instance = new CreateUser(name);
    }
    return instance;
  };
})();
// 测试单体模式的实例
var a = new ProxyMode("aaa");
console.log("🚀 ~ file: singleton.js:30 ~ a:", a);
var b = new ProxyMode("bbb");
console.log("🚀 ~ file: singleton.js:31 ~ b:", b);
// 因为单体模式是只实例化一次，所以下面的实例是相等的
console.log(a === b); //true
