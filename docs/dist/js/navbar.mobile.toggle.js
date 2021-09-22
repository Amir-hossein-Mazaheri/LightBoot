// imports element selector functions
import { __, _, _i } from './elementSelector.js';

const navbarToggler = __(".navbar-toggle");
const countNavbar = navbarToggler.length;

let navbarToggle = (function () {
    for (let counter = 0; counter < countNavbar; counter++) {
        navbarToggler[counter].setAttribute("id", "nvbT" + (counter + 1));
        let navbarToggleMenu = _(_i("nvbT" + (counter + 1)).getAttribute("data-toggle-menu"));
        let navbarToggleLogo = _(_i("nvbT" + (counter + 1)).getAttribute("data-toggle-logo"));

        //adds function dropDownToggle for each button
        _("#nvbT" + (counter + 1)).addEventListener("click", dropDownToggle);
        navbarToggler[counter].classList.add('center-y-by-pos');

        function dropDownToggle() {
            navbarToggleMenu.classList.toggle('navbar-active');
            navbarToggleLogo.classList.toggle('mb-1');
            navbarToggler[counter].classList.toggle('center-y-by-pos');
            navbarToggler[counter].classList.toggle('t-5');
        }
    }
}())
