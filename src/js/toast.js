const toastToggle = document.querySelectorAll('[toast-Toggle]');
let toastIsClicked = false;

toastToggle.forEach(value => {
    document.querySelector("body").classList.add('overflow-x-h');
    const toast = document.querySelector(value.getAttribute('toast-Toggle'));
    const toastWidth = toast.offsetWidth;

    if (toast.classList.contains('toast-bottom-right') || toast.classList.contains('toast-top-right')) {
        toast.style.transform = `translateX(calc(${toastWidth}px + 2rem))`;
        toast.style.opacity = '0';
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
    }

    if (toast.classList.contains('toast-bottom-left') || toast.classList.contains('toast-top-left')) {
        toast.style.transform = `translateX(calc((-${toastWidth}px - 2rem)))`;
        toast.style.opacity = '0';
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