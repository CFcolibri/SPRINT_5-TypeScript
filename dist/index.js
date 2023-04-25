"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//escriure aqui per conversió a js
//const scoreJoke: number[] = [];
const arxiu = new Date();
const jokeText = document.querySelector('.joke');
const button = document.querySelector('.container button');
const weatherLog = document.querySelector('#icon');
const celsius = document.querySelector('#temperature');
const file = new Date();
const jokeScore = [];
document.addEventListener('DOMContentLoaded', vote);
//////function to show score buttons
const buttonHide = document.querySelector('.score');
let showOrHide = function () {
    buttonHide.style.display = 'block';
};
///////Function to get the text joke from api
function getJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const jokeData = yield fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        });
        const jokeObj = yield jokeData.json();
        jokeText.innerHTML = jokeObj.joke;
        console.log("Dad Joke:", jokeObj);
    });
}
/////Function score jokes, data 
const scoreJoke = [];
function addToList(score) {
    const reportJokes = {
        joke: jokeText.innerHTML,
        score,
        date: arxiu.toISOString()
    };
    scoreJoke.push(reportJokes);
    console.log(scoreJoke);
}
/////// function to get Norris jokes from api
function justJokeNorris() {
    return __awaiter(this, void 0, void 0, function* () {
        const dataNorris = yield fetch('https://api.chucknorris.io/jokes/random', {
            headers: { 'Accept': 'application/json' }
        });
        const boxNorris = yield dataNorris.json();
        jokeText.innerHTML = boxNorris.value;
        console.log("Norris Joke:", boxNorris);
    });
}
////////Aleatori function
function random() {
    const numbers = [0, 1];
    return Math.round(Math.random() * (numbers.length - 1));
}
////// Random score vote
function vote() {
    const bottunLike = document.getElementById("bottunLike");
    const bottunUndefine = document.getElementById("bottunUndefine");
    const bottunUnlike = document.getElementById("bottunUnlike");
    background();
    if (random() == 0) {
        getJoke();
    }
    else {
        justJokeNorris();
    }
}
//////function background
function background() {
    const shapes = ['3blob.svg', '5blob.svg', '6blob.svg', '7blob.svg', '8blob.svg', '9blob.svg', '10blob.svg', '11blob.svg', '4blob.svg', '12blob.svg', '13blob.svg', '14blob.svg', '15blob.svg', '16blob.svg'];
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    document.body.style.backgroundImage = `url(image/${randomShape})`;
}
/////Whethear function from api
function justWeather() {
    return __awaiter(this, void 0, void 0, function* () {
        const weatherData = yield fetch('https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=a0c37fff195ef48a266317e196bf5248&lang=en&units=metric', {
            headers: { 'Accept': 'application/json' }
        });
        const weatherBox = yield weatherData.json();
        weatherLog.innerHTML = ("<img src = " + 'http://openweathermap.org/img/wn/' + weatherBox['weather'].map((weather) => weather.icon) + "@2x.png" + " >");
        celsius.innerHTML = weatherBox.main.temp.toString().split(".")[0] + (" ºC ");
    });
}
justWeather();
//const item = getJoke()[Math.floor(Math.random() * getJoke().lenght)];
/*const jokeText = document.querySelector('.joke');
document.addEventListener('DOMContentLoaded', getJoke);

async function getJoke(){
const jokeData = await fetch('https://icanhazdadjoke.com/', {
headers: {
'Accept': 'application/json'
}
});
const jokeObj = await jokeData.json();
jokeText.innerHTML = jokeObj.joke;
}*/ 
