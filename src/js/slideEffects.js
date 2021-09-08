// this file add slide animation (it's similar to jQuery slide animation);
function getHeight(element) {
    let elementHeight;

    if (getComputedStyle(element).display == "none") {
        element.style.display = "initial";
        element.style.visibility = "hidden";
        element.style.position = "absolute";
        elementHeight = element.clientHeight;
        element.style.removeProperty('display');
        element.style.removeProperty('visibility');
        element.style.removeProperty('position');
    } else {
        elementHeight = element.clientHeight;
    }
    return elementHeight;
}

function getPaddingTop(element) {
    const paddingTop = parseInt(getComputedStyle(element).paddingTop);
    return paddingTop;
}

function getPaddingBottom(element) {
    const paddingBottom = parseInt(getComputedStyle(element).paddingBottom);
    return paddingBottom;
}

function slideEffectOpen(element) {
    element.setAttribute('style', '');
    let elmHeight = getHeight(element);
    element.style.overflow = "hidden";
    element.style.display = "block";
    let elmPaddingT = getPaddingTop(element);
    let elmPaddingB = getPaddingBottom(element);
    let height = 0;
    let paddingTop = 0;
    let paddingBottom = 0;
    element.style.height = height + "px";
    element.style.paddingTop = paddingTop + "px";
    element.style.paddingBottom = paddingBottom + "px";
    let int = setInterval(increaseHeight, 0);

    function increaseHeight() {
        if (height != elmHeight) {
            height++;
        }
        if (paddingTop != elmPaddingT) {
            paddingTop++;
        }
        if (paddingBottom != elmPaddingB) {
            paddingBottom++;
        }
        element.style.paddingTop = paddingTop + "px";
        element.style.height = height + "px";
        element.style.paddingBottom = paddingBottom + "px";
        if (height == elmHeight && paddingTop == elmPaddingT && paddingBottom == elmPaddingB) {
            clearInterval(int);
        }
    }
}

function slideEffectClose(element) {
    let elmPaddingT = getPaddingTop(element);
    let elmPaddingB = getPaddingBottom(element);
    let elmHeight = getHeight(element);
    element.style.overflow = "hidden";
    let height = elmHeight;
    let paddingTop = elmPaddingT;
    let paddingBottom = elmPaddingB;
    let int = setInterval(decreaseHeight, 0);

    function decreaseHeight() {
        height--;
        element.style.height = height + "px";
        paddingBottom--;
        element.style.paddingBottom = paddingBottom + "px";
        paddingTop--;
        element.style.paddingTop = paddingTop + "px";
        if (elmHeight == 0 && paddingTop == 0 && paddingBottom == 0) {
            clearInterval(int);
        }
    }
}

function slideEffectToggle(element) {
    elmD = getComputedStyle(element).display;
    elmHeight = parseInt(getComputedStyle(element).height);
    if (elmD == 'none' || elmHeight == 0 || isNaN(elmHeight)) {
        slideEffectOpen(element);
    } else {
        slideEffectClose(element)
    }
}

export { getHeight, getPaddingTop, getPaddingBottom, slideEffectOpen, slideEffectClose, slideEffectToggle };