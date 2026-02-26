export {};

// Timer Functions
// types of timer functions:
// setTimeout
// setInterval
// console.log("This is the 1st statement");

// let m = setTimeout((): void => {
//   console.log("Hello there");
// }, 0);
// console.log("This is the 2st statement");

// let b = setInterval(() => {
//   console.log("I willl run after 3 sec");
// }, 3000);

// Promises

let a = new Promise<string>((res, rej) => {
  setTimeout(() => {
    let state = true;
    if (state) res("success");
    else rej("failure");
  }, 3000);
});
console.log(a);

// Async Await

let myfn = async () => {
  let res = await a;
  console.log(res, "async");
};
myfn();

// a.then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });
