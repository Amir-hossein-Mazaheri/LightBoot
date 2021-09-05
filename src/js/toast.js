const toastToggle = document.querySelectorAll('[toast-toggle]');
let toastIsClicked = false;

toastToggle.forEach(value => {
    document.querySelector("body").classList.add('overflow-x-h');
    const toast = document.querySelector(value.getAttribute('toast-toggle'));
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

const toast = function (toast_type = 'danger', toast_pos = 'bottom-left', toast_content = 'NOTHING ENTERED AS A CONTENT FOR TOAST!!!!', toast_close_button = false, toast_entrance_interval = 200, toast_exit_interval = 600) {
    const toastElm = document.createElement('div');
    toastElm.classList.add('toast-' + toast_type);
    toastElm.classList.add('toast-' + toast_pos);
    toastElm.style.opacity = '0';
    toastElm.innerHTML = toast_content;

    function toastEffect() {
        if (toast_pos == 'bottom-right' || toast_pos == 'top-right') {
            toastElm.style.transform = `translateX(calc(${toastElm.offsetWidth}px + 2rem))`;
        } else {
            toastElm.style.transform = `translateX(calc(${-toastElm.offsetWidth}px - 2rem))`;
        }
    }

    if (toast_close_button == true) {
        toastCloseBtn = document.createElement('div');
        toastCloseBtn.classList.add('close-button');
        toastElm.append(toastCloseBtn);
        toastCloseBtn.addEventListener('click', () => {
            toastElm.style.opacity = '0';
            toastEffect()
        });
    }

    document.querySelector('body').prepend(toastElm);
    toastEffect()

    setTimeout(() => {
        toastElm.style.opacity = '1';
        if (toast_pos == 'bottom-right' || toast_pos == 'top-right') {
            toastElm.style.transform = `none`;
        } else {
            toastElm.style.transform = `none`;
        }

        if (toast_exit_interval != 0) {
            setTimeout(() => {
                toastElm.style.opacity = '0';
                toastEffect()
            }, toast_exit_interval + 700);
        }
    }, toast_entrance_interval)
}