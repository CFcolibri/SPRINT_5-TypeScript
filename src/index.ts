//escriure aqui per conversió a js
//const scoreJoke: number[] = [];
const arxiu: Date = new Date();
const jokeText: HTMLElement = document.querySelector('.joke')!;
const button: HTMLButtonElement | null = document.querySelector('.container button');
const weatherLog: HTMLImageElement = document.querySelector('#icon')!;
const celsius: HTMLSpanElement = document.querySelector('#temperature')! ;



const file: Date = new Date();
const jokeScore : any = [];

document.addEventListener('DOMContentLoaded', vote);

//////function to show score buttons
const buttonHide: HTMLAnchorElement = document.querySelector('.score')!;
let showOrHide = function(){
    buttonHide.style.display = 'block';
}

///////Function to get the text joke from api
async function getJoke(){
    const jokeData: Response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });
    const jokeObj: {joke:string}= await jokeData.json();
    jokeText.innerHTML = jokeObj.joke;
    console.log("Dad Joke:",jokeObj)
}

/////Function score jokes, data 

const scoreJoke: { joke: string, score: number, date: string }[] = [];

function addToList(score: number){
    const reportJokes = {
        joke: jokeText.innerHTML,
        score,
        date: arxiu.toISOString()
    };
    scoreJoke.push(reportJokes);
    console.log(scoreJoke);
}

/////// function to get Norris jokes from api

async function justJokeNorris(): Promise<void> {
    const dataNorris = await fetch('https://api.chucknorris.io/jokes/random', {
      headers: { 'Accept': 'application/json'}
    });
    const boxNorris: {value:string} = await dataNorris.json();
    jokeText.innerHTML = boxNorris.value;
    console.log("Norris Joke:", boxNorris)

  }
  
////////Aleatori function
function random(): number {
    const numbers: number[] = [0, 1];
    return Math.round(Math.random() * (numbers.length - 1));
  }
  

////// Random score vote
function vote(): void {
    const bottunLike = document.getElementById("bottunLike");
    const bottunUndefine = document.getElementById("bottunUndefine");
    const bottunUnlike = document.getElementById("bottunUnlike");
    background();
    if (random() == 0) {
      getJoke();
    } else {
      justJokeNorris();
    }

  }

//////function background
function background(): void {
const shapes: string[] = ['3blob.svg', '5blob.svg', '6blob.svg', '7blob.svg', '8blob.svg', '9blob.svg', '10blob.svg', '11blob.svg', '4blob.svg', '12blob.svg', '13blob.svg', '14blob.svg', '15blob.svg', '16blob.svg'];
const randomShape: string = shapes[Math.floor(Math.random() * shapes.length)];
document.body.style.backgroundImage = `url(image/${randomShape})`;
}

/////Whethear function from api
async function justWeather(): Promise<void> {
    const weatherData = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=a0c37fff195ef48a266317e196bf5248&lang=en&units=metric', {
      headers: {'Accept': 'application/json'}
    });
    const weatherBox = await weatherData.json();
  
    weatherLog.innerHTML = ("<img src = " + 'http://openweathermap.org/img/wn/' + weatherBox['weather'].map((weather: any) => weather.icon) + "@2x.png" + " >");

    celsius.innerHTML = weatherBox.main.temp.toString().split(".")[0] + (" ºC ");
    
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