// imports element selector functions
import { __, _ , _i} from './elementSelector.js';

const closeButtons = __(".close-button");
const countCloseButtons = closeButtons.length;

let closeButton = (function () {
    for (let counter = 0; counter < countCloseButtons; counter++) {
        closeButtons[counter].setAttribute("id", "clsB" + (counter + 1));
        let shouldBeClose = _(_i("clsB" + (counter + 1)).getAttribute("data-for-close"))
        let shouldBeCloseWidth = shouldBeClose.offsetWidth;
        let closeInterval = '700'
        //setting style to have special effect
        shouldBeClose.style.opacity = '1';
        shouldBeClose.style.transition = `${closeInterval}ms`;
        shouldBeClose.style.transform = 'none';
        //adds function, closeFunction for each closeButton
        _("#clsB" + (counter + 1)).addEventListener("click", closeFunction);

        function closeFunction() {
            shouldBeClose.style.opacity = '0';
            shouldBeClose.style.transform = `translateX(${shouldBeCloseWidth}px)`; // you can play with interval and transform to change effect
            setInterval(function() {
                shouldBeClose.remove()
            }, closeInterval / 2);
        }
    }
}())
