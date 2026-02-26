"use strict";
// // OOPS
// // classes
// // class demo{
// //     //properties
// //     //methods
// //     //constuctor -->special class
// //     constructor(){
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
exports.myfn = myfn;
// //     }
// // }
// class Car {
//   private brand: string;
//   color: string;
//   start(): void {
//     console.log("Hi This is my car", this.brand, this.color);
//   }
//   constructor(brand: string, color: string, stop: () => void) {
//     this.brand = brand;
//     this.color = color;
//     this.start();
//     stop();
//   }
// }
// let b = () => {
//   console.log("haha");
// };
// let a = new Car("marussia", "red", b);
// console.log(a.color);
// // a.start();
var Animal = /** @class */ (function () {
    function Animal(type) {
        this.type = type;
    }
    return Animal;
}());
exports.Animal = Animal;
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sound = "woff";
        return _this;
        // constructor(sound: string, type: string) {
        //   super(type);
        //   this.sound = sound;
        //   this.type = "mamaaaal";
        // }
    }
    return Dog;
}(Animal));
function myfn() {
    console.log("hah haha haaa");
}
var a = new Dog("woof");
console.log(a);
