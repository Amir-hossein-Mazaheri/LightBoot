// imports element selector functions
import {__, _, _i} from './elementSelector.js';

const tabItems = __(".tab-item");
const tabs = __(".tab");
const countTabItems = tabItems.length;
const tabContents = __(".tab-content");
let tabBodyAcc = 0;
let tabBodyLength;

const tab = (function () {
    for (let counter = 0; counter < countTabItems; counter++) {
        tabItems[counter].setAttribute("id", "tb" + (counter + 1));
        let tabCont = _(
            _i("tb" + (counter + 1)).getAttribute("data-tab-content")
        );
        tabBodyLength = Number(
            __(_i("tb" + (counter + 1)).getAttribute("data-tab-body") + "> *").length
        );
        if (counter < tabs.length) {
            tabBodyAcc += tabBodyLength;
            console.log("total is:" + tabBodyAcc);
        }
        var county;
        _("#tb" + (counter + 1)).addEventListener("click", function () {
            _("#tb" + (counter + 1)).classList.toggle("active");
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