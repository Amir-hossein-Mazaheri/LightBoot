function _(element) {
    return document.querySelector(element);
}

function __(element) {
    return document.querySelectorAll(element);
}

function _i(element_id) {
    return document.getElementById(element_id);
}

function _c(element_class) {
    return document.getElementsByClassName(element_id);
}

function _t(tag) {
    return document.getElementsByTagName(tag);
}

export {_ , __, _c, _i, _t};