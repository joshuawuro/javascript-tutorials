//SLEEP DEPT CALCULATOR
/**
 * Did you know that giraffes sleep 4.6 hours a day? We humans need more that that. If we don't sleep enough, we accumulate sleep dept. In this project we'll calculate if you're getting enough sleep each week using sleep dept calculator.
 * 
 * The program will determine the actual and ideal hours of sleep for each night of sleep the last week.
 * 
 * Finally, it will calculate, in hours, how far you are from your weekly sleep goal.
 * 
 */

getSleepHours = day =>{
    if (day === 'monday'){
        return 8;
    }
    
    else if(day === 'tuesday'){
        return 7;
    }

    else if(day === 'wednesday'){
        return 6;
    }

    else if(day === 'thursday'){
        return 8;
    }

    else if(day === 'friday'){
        return 5;
    }

    else if(day === 'saturday'){
        return 9;
    }

    else if(day === 'sunday'){
        return 10;
    }

    else{
        return 'Error!'
    }
};

// console.log(getSleepHours('Friday'));
// console.log(getSleepHours('Tuesday'));
// console.log(getSleepHours('Saturday'));


getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
};

console.log(getActualSleepHours());

getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
}

console.log(getIdealSleepHours());


calculateSleepDept = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours){
        console.log('Congratulations, you got the perfect amount of sleep!');
    } else if(actualSleepHours > idealSleepHours){
        console.log('You actually got' + (idealSleepHours - actualSleepHours) + 'more sleep hours!');
    } else if (actualSleepHours < idealSleepHours){
        console.log('Oops, you need to get' + (idealSleepHours - actualSleepHours) + 'extra rest');
    } else{
        console.log('Error!, check your code');
    }
};
