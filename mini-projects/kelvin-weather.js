/**
 * In this project, we’re going to practice variables and printing to the console in JavaScript so you can hone your skills and feel confident taking them to the real world. Why? You’ve got to master the basics. Get comfortable with these fundamentals.
 */

/**
 * Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.

With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.
 */

const Kelvin = 293;
const Celcius = Kelvin - 273;
const Fahrenheit = Celcius * (9/5) + 32;
console.log(`The Temperature is ${Kelvin} degrees kelvin`);
console.log(`The Temperature is ${Celcius} degrees celcius`);
console.log(`The Temperature is ${Fahrenheit} degrees fahrenheit`);

fahrenheit = Math.floor(Fahrenheit);
console.log(Fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)