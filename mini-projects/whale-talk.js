//Whale Talk
/**
 * Take a phrase like 'turpentine and turtles' and translate it into its 'whale talk' equivalent to 'UUEEIEEAUUEE'
 *
 * There are a few simple rules for translating text to whale language:
 * 1. There are no consonants. Only vowels excluding 'y'
 * 2. The u's and e's are extra long, so we must double them in our program.
 * 
 * Once we have converted the text to the whale language, the result is sung slowly, as is a custom in the ocean.
 * 
 * To accomplish this translation, we can use our knowledge of loops. Lets get started!
 */

let input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++){
    // console.log(`The iterator numbered position is ${i}`);

    if (input[i] === 'e'){
        resultArray.push(input[i]);
    }

    if (input[i] === 'u'){
        resultArray.push(input[i]);
    }

    for (let j = 0; j < vowels.length; j++){
        // console.log(`vowel position is ${j}`);
        if (input[i] === vowels[j]){
            // console.log(input[i]);
            resultArray.push(input[i]);
        }
    }
};

console.log(resultArray);
let resultString = resultArray.join().toUpperCase();
console.log(resultString);


