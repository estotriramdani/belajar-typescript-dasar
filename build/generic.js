"use strict";
function myData(value) {
    return value;
}
console.log(myData('Esto').length);
console.log(myData(123).toString());
var getData = function (value) {
    return value;
};
console.log(getData('Est').length);
console.log(getData(123).toExponential());
