"use strict";
function getName() {
    return 'Esto';
}
function getAge() {
    return 21;
}
function getMaritalStatus() {
    return false;
}
// tidak ada return value
function printName() {
    console.log('Esto Triramdani Nurlustiawan');
}
// parameter
function multiply(value1, value2) {
    return value1 * value2;
}
function add(value1, value2) {
    return value1 + value2;
}
// default parameter
var fullName = function (firstName, lastName) {
    if (lastName === void 0) { lastName = 'Nurlustiawan'; }
    return firstName + ' ' + lastName;
};
var getProfile = function (profile) {
    return profile;
};
// optional paramter
var optionalParameter = function (value1, value2) {
    return value1 + value2;
};
console.log(optionalParameter('', 'aa'));
