const srcObj = {
  p1: 1,
  p2: 2,
  p3: 3,
  p4: 4,
  // 5 - 99,
  p100: 100,
};

it('captures rest propertsie', () => {
  /*
    newObj = {
      p3: 3,
      p4: 4,
      // 5 - 99
      p100: 100,

      p1: 7,
      p2: 8,
    }
  */

  const newObj = {
    ...srcObj,
    p1: 7,
    p2: 8,
  };

  // const newObj = Object.assign({}, srcObj, { p1: 7, p2: 8 })

  const arr1 = [1, 2, 3];

  // [0, 1, 2, 3]

  const newArr = [0, ...arr1];
});
