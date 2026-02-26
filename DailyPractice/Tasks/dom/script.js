// let abc = (a) => {
//   console.log(a);
//   return (b) => {
//     console.log(b);
//   };
// };

// abc(10)(20);

function abc(a) {
  if (a === undefined) return;
  console.log(a);
  return abc;
}
abc(10)(20)(30)(40)(50);
