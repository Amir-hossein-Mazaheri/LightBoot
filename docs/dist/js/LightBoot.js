/*
 * LightBoot v1.0.0
 * Author : Amirhossein Mazaheri
 * Github : https://github.com/LightSpeedGuy/LightBoot.git
 * Copyright 2021 LightBoot
 */

//pre page loader
//creating preload element
function $preLoader() {
  const preLoader = document.createElement("div");
  preLoader.classList.add("prePageLoader");
  document.querySelector("html").prepend(preLoader);

  //when window is fully loaded preload thing disappears
  window.addEventListener("load", function () {
    const loader = document.querySelector(".prePageLoader");
    loader.style.opacity = "0";
    setInterval(function () {
      loader.remove();
    }, 500);
  });
}

//drop dropdown
const dropDownButtons = document.querySelectorAll(".dropdown-button");
const countDropDowns = document.querySelectorAll(".dropdown").length;

let dropDown = (function () {
  for (let counter = 0; counter < countDropDowns; counter++) {
    dropDownButtons[counter].setAttribute("id", "dpB" + (counter + 1));
    let dropDownMenu = document.querySelector(
      document
        .getElementById("dpB" + (counter + 1))
        .getAttribute("data-toggle-menu")
    );

    //adds function dropDownToggle for each button
    document
      .querySelector("#dpB" + (counter + 1))
      .addEventListener("click", dropDownToggle);

    function dropDownToggle() {
      dropDownMenu.classList.toggle("dropdown-show");
    }
  }
})();

//navbar mobile button toggler
const navbarToggler = document.querySelectorAll(".navbar-toggle");
const countNavbar = navbarToggler.length;

let navbarToggle = (function () {
  for (let counter = 0; counter < countNavbar; counter++) {
    navbarToggler[counter].setAttribute("id", "nvbT" + (counter + 1));
    let navbarToggleMenu = document.querySelector(
      document
        .getElementById("nvbT" + (counter + 1))
        .getAttribute("data-toggle-menu")
    );
    let navbarToggleLogo = document.querySelector(
      document
        .getElementById("nvbT" + (counter + 1))
        .getAttribute("data-toggle-logo")
    );

    //adds function dropDownToggle for each button
    document
      .querySelector("#nvbT" + (counter + 1))
      .addEventListener("click", dropDownToggle);
    navbarToggler[counter].classList.add("center-y-by-pos");

    function dropDownToggle() {
      navbarToggleMenu.classList.toggle("navbar-active");
      navbarToggleLogo.classList.toggle("mb-1");
      navbarToggler[counter].classList.toggle("center-y-by-pos");
      navbarToggler[counter].classList.toggle("t-5");
    }
  }
})();

//off Canvas
const body = document.querySelector("body");
const canvasToggler = document.querySelectorAll(".canvasToggler");
const canvasCount = canvasToggler.length;
const canvasFilterContent = document.createElement("div"); // create a div
canvasFilterContent.classList.add("filter"); // adds filter class to previous div
let isClicked = false; // for toggle

const canvas = (function () {
  for (let counter = 0; counter < canvasCount; counter++) {
    //set a unique id to each canvas toggler
    canvasToggler[counter].setAttribute("id", "cv" + (counter + 1));

    //get canvas id from canvas toggler
    let canvas = document.querySelector(
      document
        .getElementById("cv" + (counter + 1))
        .getAttribute("data-toggle-canvas")
    );

    let canvasWidth = canvas.offsetWidth; // get canvas width

    //adds a filter(the black effect) at the end of canvas-container
    document
      .querySelector(".canvas-container")
      .appendChild(canvasFilterContent);

    //adds transform to canvas depend of its width | note :canvas right should moves reverse
    if (canvas.classList.contains("canvas-right")) {
      canvas.style.transform = `translateX(${canvasWidth}px)`;
    } else {
      canvas.style.transform = `translateX(-${canvasWidth}px)`;
    }

    //set canvas toggler function to each canvas toggler
    document
      .querySelector("#cv" + (counter + 1))
      .addEventListener("click", function () {
        body.classList.toggle("overflow-h");

        const canvasFilter = document.querySelector(".filter");

        // toggle canvas
        if (isClicked == false) {
          isClicked = true;
          canvasFilter.style.opacity = "1";
          canvasFilter.style.zIndex = "100";
          canvas.style.zIndex = "200";
          canvas.style.transform = `translateX(0)`;
          canvas.style.opacity = "1";
        } else {
          isClicked = false;
          canvasFilter.style.opacity = "0";
          canvasFilter.style.zIndex = "-1";
          canvas.style.zIndex = "-1";
          // canvas right should moves reverse
          if (canvas.classList.contains("canvas-right")) {
            canvas.style.transform = `translateX(${canvasWidth}px)`;
          } else {
            canvas.style.transform = `translateX(-${canvasWidth}px)`;
          }

          canvas.style.opacity = "0";
        }
      });
  }
})();

//close button
const closeButtons = document.querySelectorAll(".close-button");
const countCloseButtons = closeButtons.length;

let closeButton = (function () {
  for (let counter = 0; counter < countCloseButtons; counter++) {
    closeButtons[counter].setAttribute("id", "clsB" + (counter + 1));
    let shouldBeClose = document.querySelector(
      document
        .getElementById("clsB" + (counter + 1))
        .getAttribute("data-for-close")
    );
    let shouldBeCloseWidth = shouldBeClose.offsetWidth;
    let closeInterval = "700";
    //setting style to have special effect
    shouldBeClose.style.opacity = "1";
    shouldBeClose.style.transition = `${closeInterval}ms`;
    shouldBeClose.style.transform = "none";
    //adds function, closeFunction for each closeButton
    document
      .querySelector("#clsB" + (counter + 1))
      .addEventListener("click", closeFunction);

    function closeFunction() {
      shouldBeClose.style.opacity = "0";
      shouldBeClose.style.transform = `translateX(${shouldBeCloseWidth}px)`; // you can play with interval and transform to change effect
      setInterval(function () {
        shouldBeClose.remove();
      }, closeInterval / 2);
    }
  }
})();

//tab
const tabItems = document.querySelectorAll(".tab-item");
const tabs = document.querySelectorAll(".tab");
const countTabItems = tabItems.length;
const tabContents = document.querySelectorAll(".tab-content");
let tabBodyAcc = 0;
let tabBodyLength;

const tab = (function () {
  for (let counter = 0; counter < countTabItems; counter++) {
    tabItems[counter].setAttribute("id", "tb" + (counter + 1));
    let tabCont = document.querySelector(
      document
        .getElementById("tb" + (counter + 1))
        .getAttribute("data-tab-content")
    );
    tabBodyLength = Number(
      document.querySelectorAll(
        document
          .getElementById("tb" + (counter + 1))
          .getAttribute("data-tab-body") + "> *"
      ).length
    );
    if (counter < tabs.length) {
      tabBodyAcc += tabBodyLength;
      console.log("total is:" + tabBodyAcc);
    }
    var county;
    document
      .querySelector("#tb" + (counter + 1))
      .addEventListener("click", function () {
        document
          .querySelector("#tb" + (counter + 1))
          .classList.toggle("active");
        tabCont.classList.toggle("active");
        for (county = 0; county < tabBodyAcc; county++) {
          if (county == counter) {
            continue;
          }
          tabItems[county].classList.remove("active");
          tabContents[county].classList.remove("active");
        }
      });
  }
})();

//accordion
const accordionHeadings = document.querySelectorAll(".accordion-heading");
const countAccordionHeading = accordionHeadings.length;
const accordions = document.querySelectorAll(".accordion");
const accordionContents = document.querySelectorAll(".accordion-content");

//this function select an element siblings
const getSiblings = function (elem) {
  // Setup siblings array and get the first sibling
  var siblings = [];
  var sibling = elem.parentNode.firstChild;
  // Loop through each sibling and push to the array
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== elem) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};

//random number generator function
function getRnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//main function
const accordion = (function () {
  for (let counter = 0; counter < accordions.length; counter++) {
    //adds a unique injected-id attribute to each accordion
    accordions[counter].setAttribute("injected-id", "#ac" + (counter + 1));

    //selects all of accordion items
    let accordionItems = document.querySelectorAll(
      "[injected-id ='#ac" + (counter + 1) + "']" + " > *"
    );

    //for each item adds a
    for (let i = 0; i < accordionItems.length; i++) {
      //generate a random number
      let randomId = getRnd(0, accordionItems.length * 100);

      //adds a unique injected-id attribute to each accordion item
      accordionItems[i].setAttribute(
        "injected-id",
        "#acI" + (i + 1 + randomId)
      );

      //selects accordion item heading
      let accordionHeading = document.querySelector(
        "[injected-id ='#acI" +
          (i + 1 + randomId) +
          "']" +
          "> .accordion-heading"
      );

      //selects accordion item content
      let accordionContent = document.querySelector(
        "[injected-id ='#acI" +
          (i + 1 + randomId) +
          "']" +
          "> .accordion-content"
      );

      //adds event to each accordion heading
      accordionHeading.addEventListener("click", function () {
        //toggle class active from accordion content and accordion heading itself
        accordionContent.classList.toggle("active");
        this.classList.toggle("active");

        getSiblings(this.parentElement).forEach((value) => {
          let $counter = value.children.length;

          for (let count = 0; count < $counter; count++) {
            value.children[count].classList.remove("active");
          }
        });
      });
    }
  }
})();
