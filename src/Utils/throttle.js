let throttleTimeoutHandler = null;

export function throttle(func, wait) {
  if (throttleTimeoutHandler) {
    return;
  }
  throttleTimeoutHandler = setTimeout(() => {
    throttleTimeoutHandler = null;
    func();
  }, wait);
}
