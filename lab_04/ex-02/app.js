const say = require('say');

//say.speak('Hello');

//say.stop();

say.speak("Hello?" + 'Raj', 0.5);
//say.stop();

function sorryDave(){
    say.speak("I am sorry Dave.");
}

setTimeout(sorryDave, 5000);