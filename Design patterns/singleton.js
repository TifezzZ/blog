/*
 * @Author: TifezzZ
 * @Date: 2023-05
 * @LastEditors: TifezzZ
 * @LastEditTime: 2023-05
 * @Description:
 * 
优点：
单一实例：单例模式确保一个类只有一个实例存在，这对于需要限制实例数量的情况非常有用。它可以防止意外创建多个实例，确保全局使用的对象唯一性。

全局访问点：通过单例模式，可以在应用程序的任何地方访问该实例。这样，可以方便地共享和使用实例，而无需通过参数传递或全局变量来引用它。

缺点：

全局状态：单例模式引入了全局状态，这可能导致代码的可维护性和测试性下降。由于单例对象在整个应用程序中可见，可能会导致对象之间的耦合增加，难以单独测试和模块化。

难以扩展：由于单例模式只允许一个实例存在，因此扩展单例对象的功能可能会变得困难。如果需要为单例对象添加新的功能或修改行为，可能需要修改该对象的实现。

违背单一职责原则：单例对象负责自身的创建和管理，可能违反了单一职责原则。它既扮演了对象的角色，又具有管理实例的职责，这可能导致代码的复杂性增加。

难以进行单元测试：由于单例对象在整个应用程序中可见，并且难以替换，因此可能会对单元测试造成困扰。如果单例对象在测试环境中引入了副作用或全局状态，可能会导致测试的不确定性和不稳定性。

场景例子

定义命名空间和实现分支型方法
登录框
vuex 和 redux中的store
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
