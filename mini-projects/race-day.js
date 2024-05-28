/**
 * Race Day
Codecademy’s annual race is just around the corner! This year, we have a lot of participants. You have been hired to write a program that will register runners for the race and give them instructions on race day.
 */

let runnerAge = 59;
let registerEarly = false;
const raceNum = Math.floor(Math.random() * 999);

if (runnerAge > 18 && registerEarly === true){
    raceNums = raceNum + 1000;
    console.log(`Race starts at 9:30am and your registration number is: ${raceNums}`);
} else if(runnerAge > 18 && registerEarly === false){
    raceNums = raceNum + 1000;
    console.log(`Race starts at 11:00am and your registration number is: ${raceNums}`);
} 

if(runnerAge < 18){
    console.log(`Race starts at 12:30pm and your registration number is: ${raceNum}`);
} else if(runnerAge === 18){
    console.log('Place see us at the registration desk');
}


/**
 * 
 Here’s how our registration works. 
 There are adult runners (over 18 years of age) and youth runners (under 18 years of age). 
 They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.
 */

let registeredEarly = true;
let runnersAge = 8;
let raceNumber = Math.floor(Math.random() * 999);
console.log(raceNumber);

if (registeredEarly && runnersAge > 18){
    nw = raceNumber + 1000;
    console.log(nw);
} else{
    raceNumber;
    console.log(raceNumber);
};

if (runnersAge > 18 && registeredEarly){
    console.log(`You are racing at 9:30am and your race number is ${nw}`);
} else if(runnersAge <  18 && registeredEarly === false){
    console.log(`You are racing at 11:00am and your race number is ${raceNumber}`);
}

if (runnersAge < 18){
    console.log(`You are racing at 12:30pm and your race number is ${raceNumber}`);
} else if(runnersAge === 18){
    console.log('Please see us the registration desk');
}
