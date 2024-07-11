let userName = prompt('Please enter your name:);
let userAge = prompt('How old are you>');

const currentYear = new Date().getFullYear();
const yearOfBirth =  currentYear - userAge;

alert(`Your year of Birth is ${yearOfBirth}`);
