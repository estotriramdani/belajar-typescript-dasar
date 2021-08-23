// Object

type User = {
  name: string;
  age: number;
  isMarried: boolean;
};

const user1: User = {
  name: 'Esto',
  age: 21,
  isMarried: false,
};

user1.isMarried = true;

console.log(user1);
