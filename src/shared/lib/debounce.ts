type Callback<T extends Callback<T>> = (...args: Parameters<T>) => void;

export function debounce<T extends Callback<T>>(callback: T, ms: number): Callback<T> {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => void callback(...args), ms);
  };
}
