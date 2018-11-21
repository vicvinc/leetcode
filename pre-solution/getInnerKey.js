// 挑战目标：获取 key 的值
(function() {
  // 一个内部变量，外部无法获取
  var key = Math.random();

  console.log("[test] key:", key);

  // 一个内部函数
  function internal(x) {
    return x;
  }

  // 对外暴露的函数
  apiX = function(x) {
    try {
      return internal(x);
    } catch (err) {
      return key;
    }
  };
})();

function d() {
  try {
    return d();
    // throw new Error("x");
  } catch (e) {
    return apiX();
  }
}

console.log(d());
