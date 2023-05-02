export const debounce = <T extends (...args: any[]) => void>(
  callback: T,
  timeout = 500
) => {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, timeout);
  };
};
