const emails = ['gennaro@gmail.com', 'peppe@gmail.com', 'john@gmail.com', 'jane@gmail.com'];
let email;
let control = false;

logIn();

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
    } else {
        alert('Utente non verificato, ACCESSO NEGATO');
        logIn();
    }
}

