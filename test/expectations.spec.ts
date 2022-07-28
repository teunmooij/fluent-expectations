// import '../dist';
import { nullable } from '../dist';

describe('test', () => {
  it('should pass', () => {
    const actual = 'abc';
    actual.should.not.be('abc', 'because that is the value we assigned');
  });

  it('should also pass', () => {
    // eslint-disable-next-line prefer-const
    let actual: string | undefined = undefined;

    nullable(actual).be(undefined, 'because that is the value we assigned');
  });
});
