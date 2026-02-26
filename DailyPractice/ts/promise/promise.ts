let pro = new Promise<number>((res) => {
  res(43);
});

pro
  .then((e) => {
    return e * 10;
  })
  .then((e) => console.log(e));
