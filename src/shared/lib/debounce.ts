type Callbackk<T extends Callbackk<T>> = (...args: Parameters<T>) => void;

export function debounce<T extends Callbackk<T>>(callback: T, ms: number): Callbackk<T> {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => void callback(...args), ms);
  };
}
