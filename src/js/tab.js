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
