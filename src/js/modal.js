function _(element) {
    return document.querySelector(element);
}

function __(element) {
    return document.querySelectorAll(element);
}

const modalToggler = __('[modal-open]');
const modalFilter = document.createElement('div');
modalFilter.classList.add('modal-filter');
_('body').insertBefore(modalFilter, _('body').childNodes[1]);

modalToggler.forEach(value => {
    let modalIsClicked = false;
    const modal = _(value.getAttribute('modal-open'));
    const modalCloseBtn = _(value.getAttribute('modal-open') + ' .modal-close');

    function modalOpen() {
        modal.style.opacity = '1';
        modal.style.top = '15%';
        modal.style.zIndex = '1800';
        modalFilter.style.opacity = '1';
        modalFilter.style.zIndex = '1700';
        modalCloseBtn.style.display = 'block';
        modalIsClicked = true;
    }

    function modalClose() {
        modal.style.opacity = '0';
        modal.style.top = '0';
        modal.style.zIndex = '-1';
        modalFilter.style.opacity = '0';
        modalFilter.style.zIndex = '-1';
        modalCloseBtn.style.display = 'none';
        modalIsClicked = false;
    }

    value.addEventListener('click', () => {
        if (modalIsClicked == false) {
            modalOpen();
        } else {
            modalClose();
        }
    })

    modalCloseBtn.addEventListener('click', () => {
        if (modalIsClicked == true) {
            modalClose();
        }
    });

    modalFilter.addEventListener('click', () => {
        if (modalIsClicked == true) {
            modalClose();
        }
    });
})
