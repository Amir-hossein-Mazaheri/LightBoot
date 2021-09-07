const accordionHeadings = document.querySelectorAll(".accordion-heading");
const countAccordionHeading = accordionHeadings.length;
const accordions = document.querySelectorAll(".accordion");
const accordionContents = document.querySelectorAll('.accordion-content');

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
        sibling = sibling.nextSibling
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
        accordions[counter].setAttribute('injected-id', '#ac' + (counter + 1));

        //selects all of accordion items
        let accordionItems = document.querySelectorAll("[injected-id ='#ac" + (counter + 1) + "']" + " > *");

        //for each item adds a 
        for (let i = 0; i < accordionItems.length; i++) {

            //generate a random number
            let randomId = getRnd(0, accordionItems.length * 100);

            //adds a unique injected-id attribute to each accordion item
            accordionItems[i].setAttribute('injected-id', '#acI' + (i + 1 + randomId))

            //selects accordion item heading
            let accordionHeading = document.querySelector("[injected-id ='#acI" + (i + 1 + randomId) + "']" + "> .accordion-heading");

            //selects accordion item content
            let accordionContent = document.querySelector("[injected-id ='#acI" + (i + 1 + randomId) + "']" + "> .accordion-content");

            //adds event to each accordion heading
            accordionHeading.addEventListener('click', function () {
                //toggle class active from accordion content and accordion heading itself
                accordionContent.classList.toggle('active');
                slideEffectOpen(accordionContent);
                this.classList.toggle('active');

                getSiblings(this.parentElement).forEach((value) => {

                    let $counter = value.children.length

                    for (let count = 0; count < $counter; count++) {
                        if (value.children[count].classList.contains('accordion-heading')) {
                            value.children[count].classList.remove('active')
                        } else {
                            slideEffectClose(value.children[count])
                        }
                    }

                })
            })
        }
    }
}());
