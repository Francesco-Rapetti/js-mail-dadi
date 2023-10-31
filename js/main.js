const delay = ms => new Promise(res => setTimeout(res, ms));
const emails = ['gennaro@gmail.com', 'peppe@gmail.com', 'john@gmail.com', 'jane@gmail.com'];
let email;
let control = false;
let firstTime = true;
const glass = document.getElementById('glass');
const btn = document.getElementById('throw');
const results = document.getElementById('results');
const myScore = document.getElementById('myScore');
const CPUScore = document.getElementById('CPUScore');
const comparator = document.getElementById('comparator');
const punchLine = document.getElementById('punchLine');

// log in
logIn();

// user validation
function logIn() {
    email = prompt('Inserisci la tua mail');
    for (let i = 0; i < emails.length; i++) {
        if (email == emails[i]) {
            control = true;
            break;
        }
    }

    if (control) {
        alert('Utente verificato, ACCESSO AUTORIZZATO');
        glass.classList.remove('d-none');
    } else {
        alert('Utente non verificato, ACCESSO NEGATO');
        logIn();
    }
}

// throw dice button
btn.addEventListener('click', function() {
    if (firstTime) {
        btn.innerHTML = 'Rilancia il d6';
        glass.classList.add('expanded');
        displayResults();
        firstTime = false;
    } else {
        refreshResults();
    }
})

// display results panel
const displayResults = async () => {
    await delay(700);
    results.classList.add('display');
    setResults()
}

// rethrow dice
const refreshResults = async () => {
    results.classList.remove('display');
    await delay(500);
    setResults()
    results.classList.add('display');
}

// random d6 generator
const throwD6 = () => Math.floor(Math.random() * 6) + 1; 

// print results on screen
function setResults() {
    myScore.value = throwD6();
    myScore.innerHTML = `Tu: ${myScore.value}`;
    CPUScore.value = throwD6();
    CPUScore.innerHTML = `Computer: ${CPUScore.value}`;

    if (myScore.value > CPUScore.value) {
        comparator.innerHTML = '>';
        punchLine.innerHTML = 'Hai vinto!';
        punchLine.className = 'text-success';
    } else if (myScore.value < CPUScore.value) {
        comparator.innerHTML = '<';
        punchLine.innerHTML = 'Hai perso!';
        punchLine.className = 'text-danger';
    } else {
        comparator.innerHTML = '=';
        punchLine.innerHTML = 'Pareggio!';
        punchLine.className = 'text-warning';
    }
}

