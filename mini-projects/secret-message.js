//SECRET MESSAGE

/**
 * Using array methods, you will transform an array of strings into a secret message
 */

let secretMessage =['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out', '-2015', 'Chris', 'Pine.', 'Learn', 'JavaScript']

secretMessage.pop();
console.log(secretMessage.length);
secretMessage.push('to', 'program');
sessionStorage[7] = 'right';
secretMessage.shift();
secretMessage.unshift('Programming');
secretMessage.splice(6, 5, 'know');
console.log(secretMessage.join(' '));


//JavScript array methods
/**
 * pop()
 * push()
 * shift()
 * unshift
 * slice()
 * splice()
 * indexof()
 */