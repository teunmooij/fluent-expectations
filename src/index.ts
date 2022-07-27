import './extend';
import { Assert, assert } from './assert';

declare global {
  interface String {
    get should(): Assert<string>;
  }

  interface Number {
    get should(): Assert<number>;
  }

  interface Boolean {
    get should(): Assert<boolean>;
  }

  interface Object {
    get should(): Assert<object>;
  }
}

export { assert } from './assert';
export const optional = assert;
export const nullable = assert;
