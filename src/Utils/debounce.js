let debounceTimeoutHandler = null;

export function debounce(func, wait) {
  if (debounceTimeoutHandler) {
    clearTimeout(debounceTimeoutHandler);
    debounceTimeoutHandler = setTimeout(() => {
      debounceTimeoutHandler = null;
      func();
    }, wait);
  }
}
