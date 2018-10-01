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
      p100: 100
    }
  */
  const { p1, p2, ...newObj } = srcObj;

  expect(p1).toEqual(1);
  expect(p2).toEqual(2);

  expect(newObj.p1).toBeUndefined();
  expect(newObj.p2).toBeUndefined();
  expect(newObj.p3).toEqual(3);
  expect(newObj.p100).toEqual(100);
});

it('works in arrays', () => {
  const srcArr = [10, 20, 30, 40, 100];

  const [first, second, ...newArr] = srcArr;

  expect(newArr[0]).toEqual(30);
});

it('works in function arguments', () => {
  function X(...newArr) {
    expect(newArr[0]).toEqual(10);
  }

  X(10, 20, 30, 40);
});
