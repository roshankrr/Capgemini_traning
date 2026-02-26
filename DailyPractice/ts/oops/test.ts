// // OOPS
// // classes
// // class demo{
// //     //properties
// //     //methods
// //     //constuctor -->special class
// //     constructor(){

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

class Animal {
  protected type: string;

  constructor(type: string) {
    this.type = type;
  }
}
class Dog extends Animal {
  sound: string = "woff";
  // constructor(sound: string, type: string) {
  //   super(type);
  //   this.sound = sound;
  //   this.type = "mamaaaal";
  // }
}

function myfn() {
  console.log("hah haha haaa");
}

let a = new Dog("woof");
console.log(a);
