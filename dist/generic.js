var D = (function () {
    function D() {
    }
    D.prototype.add = function (v) {
        throw new Error("Method not implemented.");
    };
    D.prototype.get = function () {
        throw new Error("Method not implemented.");
    };
    return D;
}());
var LocalDB = (function () {
    function LocalDB(localStorageKey) {
        this.localStorageKey = localStorageKey;
    }
    LocalDB.prototype.add = function (v) {
        v.serialize();
        localStorage.setItem(this.localStorageKey, JSON.stringify(v));
    };
    LocalDB.prototype.get = function () {
        var v = localStorage.getItem(this.localStorageKey);
        return v ? JSON.parse(v) : undefined;
    };
    return LocalDB;
}());
var cart1 = {
    getItem: function () {
        return { v: '' };
    }
};
//# sourceMappingURL=generic.js.map