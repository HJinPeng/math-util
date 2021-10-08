;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
      global.moduleName = factory()
}(this, (function () {
  var test = {
    sayHi: function () {
      console.log('Hi');
    },
    sayBye: function () {
      console.log('Bye');
    }
  };

  return test
})))