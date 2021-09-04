const toastOpen = document.querySelectorAll('[toast-open]');
let toastIsClicked = false;

toastOpen.forEach(value => {
    document.querySelector("body").classList.add('overflow-x-h');
    const toast = document.querySelector(value.getAttribute('toast-open'));
    const toastWidth = toast.offsetWidth;

    if (toast.classList.contains('toast-bottom-right') || toast.classList.contains('toast-top-right')) {
        toast.style.transform = `translateX(calc(${toastWidth}px + 2rem))`;
        value.addEventListener('click', () => {
            if (toastIsClicked == false) {
                toast.style.transform = 'none';
                toastIsClicked = true;
            } else {
                toast.style.transform = `translateX(calc(${toastWidth}px + 2rem))`;
                toastIsClicked = false;
            }
        })
    }

    if (toast.classList.contains('toast-bottom-left') || toast.classList.contains('toast-top-left')) {
        toast.style.transform = `translateX(calc((-${toastWidth}px - 2rem)))`;
        value.addEventListener('click', () => {
            if (toastIsClicked == false) {
                toast.style.transform = 'none';
                toastIsClicked = true;
            } else {
                toast.style.transform = `translateX(calc((-${toastWidth}px - 2rem)))`;
                toastIsClicked = false;
            }
        })
    }

});

















