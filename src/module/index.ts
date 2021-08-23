import Asus from './Asus';

const asus = new Asus('Asus', 'Zenbook', true, false);
console.log(asus.name);
console.log(asus.type);
console.log(asus.withNumeric);
console.log(asus.withTouchButton);
asus.a();
asus.b();

console.log(typeof Number('2281'));
