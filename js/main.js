const delay = ms => new Promise(res => setTimeout(res, ms));
const emails = ['gennaro@gmail.com', 'peppe@gmail.com', 'john@gmail.com', 'jane@gmail.com'];
let email;
let control = false;
const glass = document.getElementById('glass');
const btn = document.getElementById('throw');
const results = document.getElementById('results');

logIn();
// glass.classList.remove('d-none');


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

btn.addEventListener('click', function() {
    btn.innerHTML = 'Rilancia il dado';
    glass.classList.add('expanded');
    displayResults();
})

const displayResults = async () => {
    await delay(500);
    results.classList.add('display');
}

