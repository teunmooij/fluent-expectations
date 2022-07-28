// eslint-disable-next-line @typescript-eslint/no-var-requires
const { assertThat } = require('./assert');

String.prototype.__defineGetter__('should', function () {
  return assertThat(this.valueOf());
});
Number.prototype.__defineGetter__('should', function () {
  return assertThat(this.valueOf());
});
Boolean.prototype.__defineGetter__('should', function () {
  return assertThat(this.valueOf());
});
Object.prototype.__defineGetter__('should', function () {
  return assertThat(this);
});
