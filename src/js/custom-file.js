const txtContainer = document.querySelector('#text-container');
const autoText = document.querySelector('#auto-txt');
const txt =  autoText.innerText;
autoText.innerText = '';

// adds blink at the end of the text
const blink = document.createElement('span');
blink.innerHTML = '|';
blink.style.fontSize = '1.5rem';
blink.style.fontWeight = '100';
txtContainer.appendChild(blink);

// adds blinking animation
setInterval(() => {
    blink.style.opacity = '0';
    setTimeout(() => {
        blink.style.opacity = '1';
    }, 150);
}, 700);

const splittedText = txt.split('');

// inject every character into text container every 120ms
let i = 0;
setInterval(() => {
    autoText.innerText += splittedText[i];
    if (i == txt.split('').length) {
        autoText.innerText = '';
        i = -1;
    }
    i++;
}, 120);