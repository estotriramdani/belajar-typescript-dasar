interface Laptop {
  name: string;
  on(): void;
  off(): void;
}

class Asus implements Laptop {
  name: string = 'Asus TUF Gaming';
  isGaming: boolean = true;

  on(): void {
    console.log('menyalakan');
  }
  off(): void {
    console.log('mematikan');
  }
}

class Macbook implements Laptop {
  name: string = 'Macbook Pro Retina 2017';
  on(): void {
    console.log('menyalakan macbook');
  }
  off(): void {
    console.log('mematikan macbook');
  }
}

let asus = new Asus();
console.log(asus.isGaming);
asus.on();
