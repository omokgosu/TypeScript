var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var KoreanProgrammer = (function () {
    function KoreanProgrammer(name) {
        this.name = name;
    }
    KoreanProgrammer.prototype.say = function (message) {
        console.log(message);
    };
    KoreanProgrammer.prototype.writeCode = function (requirement) {
        console.log(requirement);
        return requirement + '.....';
    };
    KoreanProgrammer.prototype.loveKimchi = function () {
        console.log('love kimchi');
    };
    return KoreanProgrammer;
}());
var jay = new KoreanProgrammer('jay');
var Korean = (function () {
    function Korean(name) {
        this.name = name;
    }
    Korean.prototype.say = function (message) {
        console.log(message);
    };
    return Korean;
}());
var KoreanProgrammer2 = (function (_super) {
    __extends(KoreanProgrammer2, _super);
    function KoreanProgrammer2(name, jumin) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.jumin = jumin;
        return _this;
    }
    KoreanProgrammer2.prototype.say = function (message) {
        console.log(message);
    };
    KoreanProgrammer2.prototype.writeCode = function (requirement) {
        console.log(requirement);
        return requirement + '.....';
    };
    KoreanProgrammer2.prototype.loveKimchi = function () {
        console.log('love kimchi');
    };
    return KoreanProgrammer2;
}(Korean));
var jay2 = new KoreanProgrammer2('jay', 2222);
//# sourceMappingURL=class2.js.map