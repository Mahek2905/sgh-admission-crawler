const searchInput = document.getElementById('input-box');
const levelSelect = document.querySelector('.level-selection select');
const locationSelect = document.querySelector('.location-selection select');
const collegeBoxes = document.querySelectorAll('.clg-box');

// Function to filter colleges based on search and dropdown values
function filterColleges() {
    const searchText = searchInput.value.toLowerCase();
    const selectedLevel = levelSelect.value.toLowerCase();
    const selectedLocation = locationSelect.value.toLowerCase();

    collegeBoxes.forEach((box) => {
        const collegeName = box.querySelector('.clg-name').textContent.toLowerCase();
        const degree = box.querySelector('.clg-degree').textContent.toLowerCase();
        const location = box.querySelector('.state-name').textContent.toLowerCase();
        const level = box.querySelector('.clg-level').textContent.toLowerCase();


        const matchesSearch = collegeName.includes(searchText) || degree.includes(searchText) || location.includes(searchText);
        const matchesLevel = selectedLevel === 'all' || level === selectedLevel;
        const matchesLocation = selectedLocation === '' || location === selectedLocation;

        if (matchesSearch && matchesLevel && matchesLocation) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });
}

// event listeners for search input and dropdowns
searchInput.addEventListener('input', filterColleges);
levelSelect.addEventListener('change', filterColleges);
locationSelect.addEventListener('change', filterColleges);