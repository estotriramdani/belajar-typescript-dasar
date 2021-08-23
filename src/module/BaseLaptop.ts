import ILaptop from './ILaptop';
import Keyboard from './Keyboard';

class BaseLaptop<T> implements ILaptop<T> {
  name: string;
  type: T;
  withNumeric: boolean;
  withTouchButton: boolean;

  constructor(
    name: string,
    type: T,
    withNumeric: boolean,
    withTouchButton: boolean
  ) {
    this.name = name;
    this.type = type;
    this.withNumeric = withNumeric;
    this.withTouchButton = withTouchButton;
  }

  a() {
    return Keyboard.a();
  }

  b() {
    return Keyboard.b();
  }
}

export default BaseLaptop;
