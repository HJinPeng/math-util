;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
      global.moduleName = factory()
}(this, (function () {
  var test = {
    sayHi: function () {
      console.log('hi, this is the version of 1.0.4, fix it in 1.0.5');
    }
  };

  return test
})))