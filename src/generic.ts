function myData<T>(value: T) {
  return value;
}

console.log(myData('Esto').length);
console.log(myData(123).toString());

const getData = <T>(value: T) => {
  return value;
};

console.log(getData('Est').length);
console.log(getData(123).toExponential());
