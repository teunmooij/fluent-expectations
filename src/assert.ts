type And<T> = {
  and: Assert<T>;
};

export type Assert<T> = {
  not: Assert<T>;
  be: (expected: T, reason?: string) => And<T>;
  equal: (expected: T, reason?: string) => And<T>;
  not: Assert<T>;
};

const and = <T>(actual: T) => ({
  get and() {
    return assertThat<T>(actual);
  },
});

const stripErrorLocation = (error: Error) => {
  if (!error.stack) return error;

  const lines = error.stack?.split('\n') || [];
  const i = lines.findIndex(line => /^\s*at /.test(line));
  error.stack = lines
    .slice(0, i)
    .concat(lines.slice(i + 1))
    .join('\n');

  return error;
};

export const assertThat = <T>(actual: T, reverse = false) => {
  return {
    be: (expected: T, reason?: string) => {
      const same = actual === expected;
      if (same === reverse) {
        const message = reverse
          ? `expected value not to be ${expected}, ${reason}`
          : `expected value to be ${expected}, ${reason}, but found ${actual}`;
        throw stripErrorLocation(new Error(message));
      }
      return and(actual);
    },
    equal: (expected: T, reason?: string) => {
      const same = JSON.stringify(actual) === JSON.stringify(expected);
      if (same === reverse) {
        const message = reverse
          ? `expected value not to be ${JSON.stringify(expected, null, 2)}, ${reason}`
          : `expected value to be ${JSON.stringify(expected, null, 2)}, ${reason}, but found ${JSON.stringify(
              actual,
              null,
              2,
            )}`;
        throw stripErrorLocation(new Error(message));
      }

      return and(actual);
    },
    get not() {
      return assertThat(actual, !reverse);
    },
  };
};
