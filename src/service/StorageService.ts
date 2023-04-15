export class StorageService {
  static prefix = '[rsschool-stuff]';

  static set<T>(key: string, value: T) {
    localStorage[this.prefix + key] = JSON.stringify({ value });
  }

  static get<T>(key: string): T | null;
  static get<T>(key: string, defaultValue: T): T;
  static get<T>(key: string, defaultValue?: T): T | null {
    const data = localStorage[this.prefix + key];
    if (data) return JSON.parse(data).value;
    if (defaultValue) return defaultValue;
    return null;
  }
}
