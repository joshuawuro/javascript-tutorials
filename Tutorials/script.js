/*let athleticFinalPosition = 'first place';

switch(athleticFinalPosition){
    case 'first place':
        console.log('You will get the Gold Medal!');
        break;
    
    case 'second place':
        console.log('You will get the Silver Medal!');
        break;

    case 'third place':
        console.log('You will get the Bronze Medal!');
        break;

    default:
        console.log('You\'re not getting any Medal. Better luck next time!');
        break;

}

/*
In the first line of the program, define a variable called userName that is set to an empty string.
If the user wants, they can enter their name in between the quotation marks.*/

let userName = '';

/*Below this variable, create a ternary expression that decides what to do if the user enters a name or not. If the user enters a name — like 'Jane' — use string interpolation to log Hello, Jane! to the console. Otherwise, simply log Hello!.
*/

userName ? console.log(`Hello, ${userName}`) : console.log('Hello');

/*Create a variable named userQuestion. The value of the variable should be a string that is the question the user wants to ask the Magic Eight Ball.*/

let userQuestion = `What are your plans for today ${userName}?`;

/*Write a console.log() for the userQuestion, stating what was asked. You can include the user’s name in the console.log() statement, if you wish!*/

console.log(userQuestion);

/*We need to generate a random number between 0 and 7.
Create another variable, and name it randomNumber. Set it equal to this expression, which uses two methods (Math.floor() and Math.random()) from the Math library.

Math.floor(Math.random() * 8);*/

let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

/*Create one more variable named eightBall, and set it equal to an empty string. We will save a value to this variable in the next steps, depending on the value of randomNumber.*/

let eightBall = '';

/*We need to create a control flow that takes in the randomNumber we made in step 5, and then assigns eightBall to a reply that a Magic Eight Ball would return. Think about utilizing if/else or switch statements. Here are 8 Magic Eight Ball phrases that we’d like to save to the variable eightBall:

'It is certain'
'It is decidedly so'
'Reply hazy try again'
'Cannot predict now'
'Do not count on it'
'My sources say no'
'Outlook not so good'
'Signs point to yes'
If the randomNumber is 0, then save an answer to the eightBall variable; if randomNumber is 1, then save the next answer, and so on. If you’re feeling creative, make your own responses!*/

switch (randomNumber){
    case 1:
        console.log('It is certain');
        break;

    case 2:
        console.log('It is decidedly so');
        break;

    case 3:
        console.log('Reply hazy and try again');
        break;

    case 4:
        console.log('Cannot predict now');
        break;
    
    case 5:
        console.log('Do not count on it');
        break;
    
    case 6:
        console.log('My sources say no');
        break;

    case 7:
        console.log('Outlook not so good');
        break;

    case 8:
        console.log('Signs point yes');
        break;

    default:
        break;
}


/*Write a console.log() to print the Magic Eight Ball’s answer, the value of the eightBall variable.*/

console.log(eightBall);

/*Run your program a few times to see random results appear in the console!

If you want extra practice:

If you started with a switch statement, convert it to if/else if/else statements.
If you started with if/else if/else statements, convert them to a switch statement.
*/


function greetings(name = 'stranger'){
    console.log(`Hello, ${name}`)
}

function makeGroceryList(milk, bread, eggs){
    console.log(`Remember to buy ${milk}`);
    console.log(`Remember to buy ${bread}`);
    console.log(`Remember to buy ${eggs}`);
}

 console.log(5 + 6 + '4' + 9 - 4 - 2);
 let a = 10;
 let b = '2';
 let c = a / b;
 console.log(typeof(a));
 console.log(typeof(b));
 console.log(typeof(c));
 console.log(typeof(NaN));


 let food = ['Waakye', 'Fufu', 'Fried Rice', 'Ice Cream'];
 let statement = 'It is time to eat ';

 const whatNext = (time) =>{
    if (time === 'Morning'){
        return statement + food[0];
    } else if(time === 'Afternoon'){
        return statement + food[1];
    } else if(time === 'Evening'){
        return food[2];
    } else{
        return statement + food[3];
    }
 }

 console.log(whatNext('Afternoon'));


 /* There are 3 options 
 1. Rest
 2. Eat
 3. Code
which answers the questions
1. Tired?
2. Hungry?
3. None
So the code is such that,
if tired, then rest if not,
code.
if hungry, then eat if not,
code.
*/

//ARRAYS
/**
 * Arrays can be declared with either const or let but there is a difference between the two.
 * With that of let, the variables in the array can be updated and re-assigned
 * With that of const, the variable in the array can only be updated buy not re-assigned
 */

let fruits = ['mangoes', 'apples', 'pear', 'pineapple', 'grapes'];
const vegetables = ['tomatoes', 'lettuce', 'carrot', 'ginger'];
console.log(fruits);
console.log(vegetables);

//updating both the fruits and vegetables arrays
fruits[0] = 'beetfruit';
vegetables[0] = 'garlic';
console.log(fruits);
console.log(vegetables);

//re-assigning the arrays 
fruits = ['beetfruit'];
//vegetables = ['garlic']; you'll realize we'll get an error
console.log(fruits);
console.log(vegetables);

//PROPERTIES
/**
 * 1. Length
 * eg. variable.length
 * This will give you the number of items in the array
 */
console.log(fruits.length);
console.log(vegetables.length);

//METHODS
/**
 * Array methods
 * There are two(2) types:
 *          1.mutating eg. push(), pop() etc.
 *          2.non-mutating eg. join(), shift(), concat() etc.
 * 1. push();
 * eg. variable.push('arguments');
 * This method adds items to the end of an array.
 * 
 * 2. pop();
 * eg variable.pop();
 * The pop method does not take any arguments
 * This method removes the last item in the array
 * 
 * Just as push() and pop() add and remove items at the end of an array, that is what shift() and unshift() does to an array but to the beginning instead of the end.
 */
fruits.push('mangoes', 'apples', 'pear', 'pineapple', 'grapes');
console.log(fruits);

vegetables.pop();
console.log(vegetables);

vegetables.unshift('popcorn');
console.log(vegetables);

vegetables.shift();
console.log(vegetables);


//LOOPS
for (let  counter = 0; counter < 5; counter++){
    console.log(counter);
}

for (let counter = 5; counter < 11; counter++){
    console.log(counter);
}


//LOOPING IN REVERSE
for (let counter = 5; counter >= 0; counter--){
    console.log(counter);
}

for (let counter = 11; counter >= 5; counter--){
    console.log(counter);
}

//LOOPING THROUGH ARRAYS
/**
 * for loops are very handy for iterating over data structures. For example, we can use a for loop to perform the same operation on each element on an array. Arrays hold lists of data, like customer names or product information. Imagine we owned a store and wanted to increase the price of every product in our catalog. That could be a lot of repeating code, but by using a for loop to iterate through the array we could accomplish this task easily.

To loop through each element in an array, a for loop should use the array’s .length property in its condition.
 */

const animals =['Dog', 'Cow', 'Cat', 'Lion'];
for (let i = 0; i < animals.length; i++){
    console.log(animals[i]);
}

const vacationSpots = ['Paris', 'Singapore', 'Texas', 'New York'];
for (let i = 0; i < vacationSpots.length; i++){
    console.log(`I would love to visit ${vacationSpots[i]}`);
}


//NESTED LOOPS
/**
 * When we have a loop running inside another loop, we call that a nested loop. One use for a nested for loop is to compare the elements in two arrays. For each round of the outer for loop, the inner for loop will run completely.
 */

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++){
    console.log(`The current value of myArray is ${myArray[i]}`);
    for (let j = 0; j < yourArray.length; j++){
        if (myArray === yourArray){
            console.log(`Both arrays have the same number: ${yourArray[j]}`);
        } else{
            console.log(`No number matched`)
        }
    }
}

//Using for loops to created the multiplication times table
for (i = 0; i <= 10; i++){
    for(j = 0; j <= 10; j++){
        console.log(`${i} x ${j} = ${[i] * [j]}`);
    }
    console.log('-------------------------------');
};

const storeInventory = [
    [
        'Item: Computer',
        'Price: $500',
        'Inventory: 25'
    ],
    [
        'Item: Speakers',
        'Price: $100',
        'Inventory: 100'
    ],
    [
        'Item: Monitors',
        'Price: $200',
        'Inventory: 27'
    ],
    [
        'Item: Headphones',
        'Price: $400',
        'Inventory: 7'
    ],
    [
        'Item: Printers',
        'Price: $100',
        'Inventory: 90'
    ],
    [
        'Item: USB Cable',
        'Price: $9',
        'Inventory: 500'
    ],
    [
        'Item: Router',
        'Price: $350',
        'Inventory: 23'
    ],
    [
        'Item: Wireless Keyboard',
        'Price: $20',
        'Inventory: 55'
    ],
    [
        'Item: Fans',
        'Price: $35',
        'Inventory: 6'
    ]
];


const bobsFollowers = ['Nathan', 'Jones', 'Peter', 'Paul'];
const tinasFollowers = ['Nathan', 'Jones', 'Esther'];

mutualFollowers = '';

for (let i = 0; i <= bobsFollowers.length; i++){
    for (let j = 0; j <= tinasFollowers.length; j++){
        if (bobsFollowers[i] === tinasFollowers[j]){
            mutualFollowers.push(bobsFollowers[i]);
        }
    }
};
console.log(mutualFollowers);


//WHILE LOOPS
let counterTwo = 1;
while (counterTwo < 4){
    console.log(counterTwo);
    counterTwo++;
}
 //same as this for loop

for (let counterTwo = 1; counterTwo < 4; counterTwo++){
console.log(counterTwo);
}


const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard = 'heart';
while (currentCard !== 'spade'){
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
};



//do...while looops

/**
 * Note that the while and do...while loops are different.! Unlike
 * the while loop, do...while loop will run at least first once whether the
 * or not the condition evaluates to true.
 */

let countString = '';
let i = 0;

do{
    countString += i;
    i++;
} while (i < 5);

console.log(countString);

const firstMessage = 'I will print!';
const secondMessage = 'I will not print!';

// A do while with a stopping condition that evaluates false
do{
    console.log(firstMessage);
} while (true === false);

//A while loop with a stopping condition that evaluates false
while (true === false){
    console.log(secondMessage);
};

let cupOfSugarNeeded = 4;
let cupsAdded = 0;

do {
    cupsAdded++
    console.log(cupsAdded);
} while (cupsAdded < cupOfSugarNeeded);


//The break key
/*Imagine we’re looking to adopt a dog. We plan to go to the shelter every day for a year and then give up. But what if we meet our dream dog on day 65? We don’t want to keep going to the shelter for the next 300 days just because our original plan was to go for a whole year. In our code, when we want to stop a loop from continuing to execute even though the original stopping condition we wrote for our loop hasn’t been met, we can use the keyword break.*/


/*
The break keyword allow programs to "break" out of the loop from within the loop's block
*/

for (let i = 0; i < 99; i++){
    if (i > 2){
        break;
    }
    console.log('Banana');
};

console.log('Orange you glad I broke out the loop!');

const rapperArray = ["lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++){
    console.log(rapperArray[i]);
    if (rapperArray[i] = "Notorious B.I.G."){
        break;
    }
};

console.log("If you don't know, now you know");



//using map() and filter() in loops//

cats =['Leopard', 'Serval', 'Tiger', 'Jaguar', 'Lion', 'Caracal'];

function toUpper(string){
    return string.toUpperCase();
};

const upperCats = cats.map(toUpper);

console.log(upperCats);


function tolower(cat) {
     return cat.startsWith('L');
}

const filters = cats.filter(tolower);

console.log(filters);

const filtered = cats.filter(cat => cat.startsWith("L"));
console.log(filtered);




const helloWorld = function() {
    return '';
};

module.exports = helloWorld;

const helloWorld = require('./helloWorld');
describe('Hello World', function()) {
    test('says "Hello World!"', function() {
        expect(helloWorld().toEqual('Hello, World!');
    })
}