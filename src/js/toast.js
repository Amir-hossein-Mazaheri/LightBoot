const toastToggle = document.querySelectorAll('[toast-toggle]');
let toastIsClicked = false;

toastToggle.forEach(value => {
    document.querySelector("body").classList.add('overflow-x-h');
    const toast = document.querySelector(value.getAttribute('toast-Toggle'));
    const toastWidth = toast.offsetWidth;
    toast.style.opacity = '0';

    if (toast.classList.contains('toast-bottom-right') || toast.classList.contains('toast-top-right')) {
        toast.style.transform = `translateX(calc(${toastWidth}px + 2rem))`;
        value.addEventListener('click', () => {
            if (toastIsClicked == false) {
                toast.style.transform = 'none';
                toast.style.opacity = '1';
                toastIsClicked = true;
            } else {
                toast.style.transform = `translateX(calc(${toastWidth}px + 2rem))`;
                toast.style.opacity = '0';
                toastIsClicked = false;
            }
        })
    } else {
        toast.style.transform = `translateX(calc((-${toastWidth}px - 2rem)))`;
        value.addEventListener('click', () => {
            if (toastIsClicked == false) {
                toast.style.transform = 'none';
                toast.style.opacity = '1';
                toastIsClicked = true;
            } else {
                toast.style.transform = `translateX(calc((-${toastWidth}px - 2rem)))`;
                toast.style.opacity = '0';
                toastIsClicked = false;
            }
        })
    }

});

const toast = function (toast_type, toast_pos, toast_content, toast_close_button = false, toast_exit_interval = 150) {
    const toastElm = document.createElement('div');
    toastElm.classList.add('toast-' + toast_type);
    toastElm.classList.add('toast-' + toast_pos);
    toastElm.innerHTML = toast_content;
    if(toast_close_button == true) {
        const timeToast = new Date();
        const milSec = timeToast.getMilliseconds();
        let uniqueId = toastElm.setAttribute('id', 'tsc' + milSec );
        toastElm.innerHTML += `<div class="close-button txt-white" toast-toggle="#tsc${milSec}"></div>`;
    }
    document.querySelector('body').prepend(toastElm);

    if (toast_exit_interval != 0) {
        setInterval(() => {
            if (toast_pos == 'bottom-right' || toast_pos == 'top-right') {
                toastElm.style.transform = `translateX(calc(${toastElm.offsetWidth}px + 2rem))`;
            } else {
                toastElm.style.transform = `translateX(calc(${-toastElm.offsetWidth}px - 2rem))`;
            }
        }, toast_exit_interval);
    }
}