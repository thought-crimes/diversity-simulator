// reduce
// map, filter

describe('.reduce', () => {
  it('reduces an array into a single value', () => {
    const srcArr = [10, 20, 30];

    const value = srcArr.reduce((acc, curr) => acc + curr, 0);

    expect(value).toEqual(60);
  });
});
