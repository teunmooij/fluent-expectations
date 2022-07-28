import './extend';
import { Assert, assertThat } from './assert';

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

export { assertThat as assert } from './assert';
export const optional = assertThat;
export const nullable = assertThat;
