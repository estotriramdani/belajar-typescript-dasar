import BaseLaptop from './BaseLaptop';

class Asus<T> extends BaseLaptop<T> {
  constructor(
    public name: string = 'Asus',
    type: T,
    withNumeric: boolean,
    withTouchButton: boolean
  ) {
    super('Asus', type, withNumeric, withTouchButton);
  }
}
export default Asus;
