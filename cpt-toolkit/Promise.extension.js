Reflect.defineProperty(Promise.prototype, 'done', {
  configurable: false,
  enumerable: false,
  value: function (onFulfilled, onRejected) {
    this.then(onFulfilled, onRejected)
      .catch(function (reason) {
        // 抛出一个全局错误
        setTimeout(() => { throw reason; }, 0);
      });
  },
  writable: false
});

Reflect.defineProperty(Promise.prototype, 'finally', {
  configurable: false,
  enumerable: false,
  writable: false,
  value: function (callback) {
    const P = this.constructor;
    return this.then(
      value => P.resolve(callback()).then(() => value),
      reason => P.resolve(callback()).then(() => { throw reason; })
    );
  }
});
