const dropDownButtons = document.querySelectorAll(".dropdown-button");
const countDropDowns = document.querySelectorAll(".dropdown").length;

let dropDown = (function () {
    for (let counter = 0; counter < countDropDowns; counter++) {
        dropDownButtons[counter].setAttribute("id", "dpB" + (counter + 1));
        let dropDownMenu = document.querySelector(document.getElementById("dpB" + (counter + 1)).getAttribute("data-toggle-menu"))
        
        //adds function dropDownToggle for each button
        document.querySelector("#dpB" + (counter + 1)).addEventListener("click", dropDownToggle);

        function dropDownToggle() {
            dropDownMenu.classList.toggle('dropdown-show')
        }
    }
}())

