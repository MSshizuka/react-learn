class EventEmit {
  // => 事件池 {事件名：[订阅方法,...]}
  pond = {};
  $on(eventName, func) {
    // => 如果没有此事件 初始化创建一个数组
    if (!this.pond.hasOwnProperty(eventName)) {
      this.pond[eventName] = [];
    }
    // => 订阅方法的去重
    if (this.pond[eventName].find(item => item === func)) return;
    this.pond[eventName].push(func);
  }

  $emit(eventName, ...args) {
    let arr = this.pond[eventName] || [];
    arr.forEach(item => {
      item(...args)
    })
  }
}

export default new EventEmit();

