const modalToggler = __('[modal-open]');
const modalFilter = document.createElement('div');
modalFilter.classList.add('modal-filter');
_('body').insertBefore(modalFilter, _('body').childNodes[1]);

modalToggler.forEach(value => {
    const modal = _(value.getAttribute('modal-open'));
    const modalCloseBtn = _(value.getAttribute('modal-open') + ' .modal-close');

    function modalOpen() {
        modal.style.opacity = '1';
        if (modal.classList.contains('modal-center')) {
            modal.style.top = '50%';
        } else if (modal.classList.contains('modal-bottom')) {
            modal.style.top = '85%';
        } else {
            modal.style.top = '15%';
        }
        modal.style.zIndex = '1800';
        modalFilter.style.opacity = '1';
        modalFilter.style.zIndex = '1700';
        modalCloseBtn.style.display = 'block';
    }

    function modalClose() {
        modal.style.opacity = '0';
        modal.style.top = '0';
        modal.style.zIndex = '-1';
        modalFilter.style.opacity = '0';
        modalFilter.style.zIndex = '-1';
        modalCloseBtn.style.display = 'none';
    }

    value.addEventListener('click', () => {
        modalOpen();
    })

    modalCloseBtn.addEventListener('click', () => {
        modalClose();
    });

    modalFilter.addEventListener('click', () => {
        modalClose();
    });
})