const levelSelect = document.querySelector(".level-selection select");
const stateSelect = document.querySelector(".location-selection select");
const clgBoxes = document.querySelectorAll(".clg-box");
const clgBody = document.querySelector(".clg-list");
const stateNames = document.querySelectorAll(".state-name");
const clgLevels = document.querySelectorAll(".clg-level");
const searchInput = document.querySelector("#input-box");

const filterLevels = (selectedLevel) => {
    clgLevels.forEach((clgLevel) => {
        let fullDiv = clgLevel.parentElement.parentElement.parentElement;
        fullDiv.style.display = "block";

        if(selectedLevel !== clgLevel.innerText.toLowerCase()) {
            fullDiv.style.display = "none";
        }
    });
}

const filterStates = (selectedState) => {
    stateNames.forEach((stateName) => {
        let fullDiv = stateName.parentElement.parentElement.parentElement;
        fullDiv.style.display = "block";

        if(selectedState !== stateName.innerText.toLowerCase()) {
            fullDiv.style.display = "none";
        }
    })
}

levelSelect.addEventListener("change", (evt) => {
    let selectedLevel = evt.target.value.toLowerCase();
    filterLevels(selectedLevel);
});

stateSelect.addEventListener("change", (evt) => {
    let selectedState = evt.target.value.toLowerCase();
    filterStates(selectedState);
});

// searchInput.addEventListener("input", (value) => console.log(value));