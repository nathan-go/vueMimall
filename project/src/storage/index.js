/**
 *
 * storage这里我们是在处理sessionStorage
 * 因为一些原因所以我们这里做了处理
 */

const STORAGE_KEY = 'mall';

export default {
    // 存储值
    // 任何简单值是可以的
    setItem(key, value, module_name) {
        if (module_name) {
            let val = this.getItem(module_name);
            if (val) {
                val[key] = value;
                this.setItem(module_name, val);
            } else {
                let o = {};
                o[key] = value;
                this.setItem(module_name, o);
            }
        } else {
            let store = this.getStorage();
            store[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(store));
        }
    },
    getItem(key, module_name) {
        // 获取某一个模块的数据，但是仅限于一级
        if (module_name) {
            // 调用了自己
            let val = this.getItem(module_name);
            if (val) {
                return val[key];
            } else {
                // 没有该模块
                return undefined;
            }
        }
        return this.getStorage()[key];
    },
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    },
    clear(key, module_name) {
        let store = this.getStorage();
        if (module_name) {
            delete store[module_name][key];
        } else {
            delete store[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    },
};
