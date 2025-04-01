const levelSelect = document.querySelector(".level-selection select");
const stateSelect = document.querySelector(".location-selection select");
const clgBoxes = document.querySelectorAll(".clg-box");
const clgBody = document.querySelector(".clg-list");
const stateNames = document.querySelectorAll(".state-name");
const clgLevels = document.querySelectorAll(".clg-level");
const searchInput = document.querySelector("#input-box");
const searchItems = document.querySelectorAll(".filter")

// Levels Dropdown
const filterLevels = (selectedLevel) => {
    clgLevels.forEach((clgLevel) => {
        let fullDiv = clgLevel.parentElement.parentElement.parentElement;
        fullDiv.style.display = "block";

        if(selectedLevel !== clgLevel.innerText.toLowerCase()) {
            fullDiv.style.display = "none";
        }
    });
}

// Location Dropdown
const filterStates = (selectedState) => {
    stateNames.forEach((stateName) => {
        let fullDiv = stateName.parentElement.parentElement.parentElement;
        fullDiv.style.display = "block";

        if(selectedState !== stateName.innerText.toLowerCase()) {
            fullDiv.style.display = "none";
        }
    })
}


// Event Listeners
levelSelect.addEventListener("change", (evt) => {
    let selectedLevel = evt.target.value.toLowerCase();
    filterLevels(selectedLevel);
});

stateSelect.addEventListener("change", (evt) => {
    let selectedState = evt.target.value.toLowerCase();
    filterStates(selectedState);
});

searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();

    clgBoxes.forEach(box => {
        const clgName = box.querySelector('.clg-name').textContent.toLowerCase();
        const clgDegree = box.querySelector('.clg-degree').textContent.toLowerCase();
        const stateName = box.querySelector('.state-name').textContent.toLowerCase();

        if (clgName.includes(searchTerm) || clgDegree.includes(searchTerm) || stateName.includes(searchTerm)) {
            box.style.display = '';
        } else {
            box.style.display = 'none';
        }
    });
});