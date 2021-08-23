class List<T> {
  private data: T[];

  constructor(...elements: T[]) {
    this.data = elements;
  }

  add(element: T): void {
    this.data.push(element);
  }

  addMultiple(...elements: T[]) {
    this.data.push(...elements);
  }

  getAll(): T[] {
    return this.data;
  }
}

let numbers = new List<number>(1, 2, 3, 4, 5);
numbers.add(2);
numbers.addMultiple(1, 1, 1);
console.log(numbers.getAll());

let random = new List<number | string>(1, 'dua', 3);
random.add(4);
random.addMultiple('5');
console.log(random.getAll());
