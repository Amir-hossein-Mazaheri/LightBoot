// imports element selector functions
import { __, _, _i } from './elementSelector.js';

const dropDownButtons = __(".dropdown-button");
const countDropDowns = __(".dropdown").length;

let dropDown = (function () {
    for (let counter = 0; counter < countDropDowns; counter++) {
        dropDownButtons[counter].setAttribute("id", "dpB" + (counter + 1));
        let dropDownMenu = _(_i("dpB" + (counter + 1)).getAttribute("data-toggle-menu"))
        
        //adds function dropDownToggle for each button
        _("#dpB" + (counter + 1)).addEventListener("click", dropDownToggle);

        function dropDownToggle() {
            dropDownMenu.classList.toggle('dropdown-show')
        }
    }
}())

