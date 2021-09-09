class Util {
  /**
   * 设置  本地缓存
   */
  setStorage(key: string, obj: string | { [v: string]: unknown }) {
    if (typeof obj === "string") {
      window.localStorage.setItem(key, obj);
    } else {
      window.localStorage.setItem(key, JSON.stringify(obj));
    }
  }

  /**
   * 获取
   */
  getStorage(key: string) {
    const val: string = window.localStorage.getItem(key) || "";
    try {
      return JSON.parse(val);
    } catch (e) {
      return val;
    }
  }

  /**
   * 删除， 如果不传值，删除所有
   */
  clearStorage(key: string) {
    if (key) {
      window.localStorage.removeItem(key);
    } else {
      window.localStorage.clear();
    }
  }
}
export default new Util();
