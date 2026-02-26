// console.log("start");

// let n: number = setTimeout(() => {
//   console.log("task completed");
// }, 0);
// clearTimeout(n);
// console.log("end");

// //
// let fn = () => {
//   return new Promise<string>((res, rej) => {
//     setTimeout(() => {
//       res("task completed");
//     }, 0);
//   });
// };

// async function main() {
//   await fn();
// }
// main();

// let p1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej("I ran");
//   }, 1000);
// });

// console.log(p1);

// p1.then((val) => {
//   console.log(val);
// })
//   .catch((val) => {          promise chaining
//     console.log(val);
//   })
//   .finally(() => {
//     console.log("THis will executed at the end");
//   });

function getUser(): Promise<string> {
  return new Promise((res, rej) => {
    rej("Heyy");
    setTimeout(() => {
      res("User");
    }, 1000);
  });
}

getUser()
  .then(() => {
    console.log("this is nicee");
  })
  .catch((val) => {
    console.log(val);
  });
