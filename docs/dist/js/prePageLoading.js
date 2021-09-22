// imports element selector functions
import { _ } from './elementSelector.js';

//creating preload element
function $preLoader() {
    const preLoader = document.createElement('div');
    preLoader.classList.add('prePageLoader');
    _('html').prepend(preLoader);
    
    //when window is fully loaded preload thing disappears
    window.addEventListener('load', function () {
        const loader = _('.prePageLoader');
        loader.style.opacity = '0';
        setInterval(function () {
           loader.remove();
        }, 500)

    })
}
