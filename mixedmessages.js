 // A function to Generate Random Number.
 const randomNumber = (number) => {
    let randomNum = Math.floor(Math.random() * number);
    return randomNum;
};
// Wisdoms variable
const welomeMessage = {
    English: ['Welcome', 'todays quote is' , 'spread the smile'],
    French: [
        'Bienvenu', 'La citation aujourd hui est', 'Difusez le sourier'],
    Spanish: ['Bienvenida', 'La cit de hoy es', 'Difunde la sonrisa']
};
// To store message data parts
let messageData = [];
for (let prop in welcomeMessage) {
    let keyValue = welcomeMessage[prop];
    let randomIndex = randomNumber(keyValue.length);
    messageData.push(keyValue[randomIndex]);
};
// Main Function. this will log the Message into the screen 
const welcomeMessage = (Array) => {
    let messageToShow = [];
    messageToShow.push( "${Array[0]}", "${Array[1]}", "${Array[]}");
    const theMessageString = messageToShow.join('\n');
    console.log(theMessageString);
};

WelcomeMessage(messageData);
