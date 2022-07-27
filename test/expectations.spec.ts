import { nullable } from '../dist';

describe('test', () => {
  it('should pass', () => {
    const actual = 'abc';
    actual.should.be('abc', 'because that is the value we assinged');
  });

  it('should also pass', () => {
    // eslint-disable-next-line prefer-const
    let actual: string | undefined = undefined;

    nullable(actual).should.be(undefined, 'because that is the value we assigned');
  });
});
