/**
 * As a seasoned athlete, one of your favorite activities is running marathons. You use a service called Training Days that sends you a message for the event you signed up for and the days you have left to train.
 * 
 * Since you code, Training Days has asked you to help them solve a problem. The program currently uses the wrong scope for its variables. They know this can be troublesome as their service evolves. 
 * 
 * In this project, you will make Training Days more maintainable and less error-prone by fixing variable scope.
 */





const getRRandEvent = () =>{
    const random = Math.floor(Math.random() * 3);
    if (random === 0){
        return 'Marathon';
    } else if (random === 1){
        return 'Triathlon';
    } else if (random === 2){
        return 'Pentathlon';
    }
};


const getTrainingDays = event =>{
    let days = '';
    if (event === 'Marathon'){
        return 50;
    } else if (event === 'Triathlon'){
        return 100;
    } else if (event === 'Pentathlon'){
        return 200;
    }

    return days;
};

const name = 'Nala';

const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
    console.log(`${name}'s time to train is: ${days} days`)
}

const event = getRRandEvent();
const days = getTrainingDays(event);

logEvent(name, event);
logTime(name, days);

