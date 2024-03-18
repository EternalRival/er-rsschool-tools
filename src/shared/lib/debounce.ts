type Callback<T extends Callback<T>> = (...args: Parameters<T>) => void;

type Debounce = <T extends Callback<T>>(callback: T, ms: number) => Callback<T>;

export const debounce: Debounce = (callback, ms) => {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => void callback(...args), ms);
  };
};
