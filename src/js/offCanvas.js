// imports element selector functions
import { __, _, _i } from './elementSelector.js';

const body = _('body');
const canvasToggler = __('.canvasToggler');
const canvasCount = canvasToggler.length;
const canvasFilterContent = document.createElement('div'); // create a div
canvasFilterContent.classList.add('filter'); // adds filter class to previous div
let isClicked = false; // for toggle

const canvas = (function () {
  for (let counter = 0; counter < canvasCount; counter++) {

    //set a unique id to each canvas toggler
    canvasToggler[counter].setAttribute("id", "cv" + (counter + 1));

    //get canvas id from canvas toggler
    let canvas = __(_i("cv" + (counter + 1)).getAttribute('data-toggle-canvas'));

    let canvasWidth = canvas.offsetWidth; // get canvas width

    //adds a filter(the black effect) at the end of canvas-container
    _('.canvas-container').appendChild(canvasFilterContent);

    //adds transform to canvas depend of its width | note :canvas right should moves reverse
    if (canvas.classList.contains('canvas-right')) {
      canvas.style.transform = `translateX(${canvasWidth}px)`;
    } else {
      canvas.style.transform = `translateX(-${canvasWidth}px)`;
    }

    //set canvas toggler function to each canvas toggler
    _("#cv" + (counter + 1)).addEventListener("click", function () {

      body.classList.toggle("overflow-h");

      const canvasFilter = document.querySelector('.filter');

      // toggle canvas
      if (isClicked == false) {

        isClicked = true;
        canvasFilter.style.opacity = "1";
        canvasFilter.style.zIndex = '100';
        canvas.style.zIndex = '200';
        canvas.style.transform = `translateX(0)`;
        canvas.style.opacity = "1";

      } else {

        isClicked = false;
        canvasFilter.style.opacity = "0";
        canvasFilter.style.zIndex = '-1';
        canvas.style.zIndex = '-1';
        // canvas right should moves reverse
        if (canvas.classList.contains('canvas-right')) {
          canvas.style.transform = `translateX(${canvasWidth}px)`;
        } else {
          canvas.style.transform = `translateX(-${canvasWidth}px)`;
        }

        canvas.style.opacity = "0";

      }
    });

  }
}())