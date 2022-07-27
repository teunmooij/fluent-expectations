// eslint-disable-next-line @typescript-eslint/no-var-requires
const { assert } = require('./assert');

String.prototype.__defineGetter__('should', function () {
  return assert(this.valueOf());
});
Number.prototype.__defineGetter__('should', function () {
  return assert(this.valueOf());
});
Boolean.prototype.__defineGetter__('should', function () {
  return assert(this.valueOf());
});
Object.prototype.__defineGetter__('should', function () {
  return assert(this);
});
