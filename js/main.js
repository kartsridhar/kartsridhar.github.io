var brisbuds = document.getElementById('brisbuds');
var openBrisbuds = document.getElementById('openBrisbuds');
var closeBrisbuds = document.getElementsByClassName('close-modal')[0];

var pynenka = document.getElementById('pynenka');
var openPynenka = document.getElementById('openPynenka');
var closePynenka = document.getElementsByClassName('close-modal')[1];

var spamc = document.getElementById('spamc');
var openSpam = document.getElementById('openSpam');
var closeSpamc = document.getElementsByClassName('close-modal')[2];

var mov = document.getElementById('movies');
var openMov = document.getElementById('openMovies');
var closeMov = document.getElementsByClassName('close-modal')[3];

var gol = document.getElementById('gol');
var openGol = document.getElementById('openGol');
var closeGol = document.getElementsByClassName('close-modal')[4];

var kernel = document.getElementById('kernel');
var openKernel = document.getElementById('openKernel');
var closeKernel = document.getElementsByClassName('close-modal')[5];

var sym = document.getElementById('sym');
var openSym = document.getElementById('openSym');
var closeSym = document.getElementsByClassName('close-modal')[6];

var bounce = document.getElementById('bounce');
var openBounce = document.getElementById('openBounce');
var closeBounce = document.getElementsByClassName('close-modal')[7];

var snake = document.getElementById('snake');
var openSnake = document.getElementById('openSnake');
var closeSnake = document.getElementsByClassName('close-modal')[8];

var hangman = document.getElementById('hangman');
var openHangman = document.getElementById('openHangman');
var closeHangman = document.getElementsByClassName('close-modal')[9];

openBrisbuds.addEventListener('click', viewBrisbuds);
closeBrisbuds.addEventListener('click', closeBris);
openPynenka.addEventListener('click', viewPynenka);
closePynenka.addEventListener('click', closePyn);
openSpam.addEventListener('click', viewSpam);
closeSpamc.addEventListener('click', closeSpam);
openMov.addEventListener('click', viewMov);
closeMov.addEventListener('click', closeMovie);
openGol.addEventListener('click', viewGol);
closeGol.addEventListener('click', closeGame);
openKernel.addEventListener('click', viewKernel);
closeKernel.addEventListener('click', closeOS);
openSym.addEventListener('click', viewSym);
closeSym.addEventListener('click', closeScot);
openBounce.addEventListener('click', viewBounce);
closeBounce.addEventListener('click', closeBV);
openSnake.addEventListener('click', viewSnake);
closeSnake.addEventListener('click', closeSS);
openHangman.addEventListener('click', viewHangman);
closeHangman.addEventListener('click', closeHM);
window.addEventListener('click', closeOut);

function viewBrisbuds() {
    brisbuds.style.display = 'block';
}

function closeBris() {
    brisbuds.style.display = 'none';
}

function viewPynenka() {
    pynenka.style.display = 'block';
}

function closePyn() {
    pynenka.style.display = 'none';
}

function viewSpam() {
    spamc.style.display = 'block';
}

function closeSpam() {
    spamc.style.display = 'none';
}

function viewMov() {
    mov.style.display = 'block';
}

function closeMovie() {
    mov.style.display = 'none';
}

function viewGol() {
    gol.style.display = 'block';
}

function closeGame() {
    gol.style.display = 'none';
}

function viewKernel() {
    kernel.style.display = 'block';
}

function closeOS() {
    kernel.style.display = 'none';
}

function viewSym() {
    sym.style.display = 'block';
}

function closeScot() {
    sym.style.display = 'none';
}

function viewBounce() {
    bounce.style.display = 'block';
}

function closeBV() {
    bounce.style.display = 'none';
}

function viewSnake() {
    snake.style.display = 'block';
}

function closeSS() {
    snake.style.display = 'none';
}

function viewHangman() {
    hangman.style.display = 'block';
}

function closeHM() {
    hangman.style.display = 'none';
}

function closeOut(event) {
    if(event.target == brisbuds) {
        brisbuds.style.display = 'none';
    }
    else if(event.target == pynenka) {
        pynenka.style.display = 'none';
    }
    else if(event.target == spamc) {
        spamc.style.display = 'none';
    }
    else if(event.target == mov) {
        mov.style.display = 'none';
    }
    else if(event.target == gol) {
        gol.style.display = 'none';
    }
    else if(event.target == kernel) {
        kernel.style.display = 'none';
    }
    else if(event.target == sym) {
        sym.style.display = 'none';
    }
    else if(event.target == bounce) {
        bounce.style.display = 'none';
    }
    else if(event.target == snake) {
        snake.style.display = 'none';
    }
    else if(event.target == hangman) {
        hangman.style.display = 'none';
    }
}
