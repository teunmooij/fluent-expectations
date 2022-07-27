type Assert<T> = {
  be: (expected: T, reason?: string) => And<T>;
  equal: (expected: T, reason?: string) => And<T>;
};

type And<T> = {
  and: Assert<T>;
};

interface String {
  get should(): Assert<string>;
}

describe('test', () => {
  it('should pass', () => {
    const actual = 'abc';
    actual.should.be('abc', 'because that is the value we assinged');
  });
});
