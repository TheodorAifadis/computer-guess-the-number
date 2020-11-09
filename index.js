const MAX_NUMBER = 100
const MIN_NUMBER = 0
let guess
const results = []

function randomInt(n){
    return Math.floor(Math.random() * n) + 1
}

document.getElementById('too-high-btn').addEventListener('click', function () {
    // Vad ska hända när man tryckt too high?
    guess = randomInt(MAX_NUMBER)
    setMessage(`Is it ${guess}?`)
})

document.getElementById('too-low-btn').addEventListener('click', function () {
    // Vad ska hända när man tryckt too low?
    guess = randomInt(MAX_NUMBER)
    setMessage(`Is it ${guess}?`)
})

document.getElementById('is-correct-btn').addEventListener('click', function () {
    // Vad ska hända när man tryckt correct?
    setMessage('Woho! :)')
})

function setMessage(msg) {
    document.getElementById('message').innerText = msg
}

function start() {
    document.getElementById('before-start').style.display = 'none'
    document.querySelector('main').style.display = 'block'

    guess = 0
    
    setMessage(`Is it ${guess}?`)
}

document
    .getElementById('start-btn')
    .addEventListener('click', start)

