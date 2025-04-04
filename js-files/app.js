// Home Page

// Filter entries
const searchInput = document.getElementById('input-box');
const levelSelect = document.querySelector('.level-selection select');
const locationSelect = document.querySelector('.location-selection select');
const collegeBody = document.querySelector('.clg-list');

// Pagination
const entriesPerPageSelect = document.querySelector('.page-select');
const paginationContainer = document.querySelector('.page-numbers-container');
const prevButton = document.querySelector('.pagination-bottom button:first-child');
const nextButton = document.querySelector('.pagination-bottom button:last-child');
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

// Pagination
let currentPage = 1;
let entriesPerPage = parseInt(entriesPerPageSelect.value);

function displayEntries() {
    const totalEntries = collegeBoxes.length;
    const totalPages = Math.ceil(totalEntries / entriesPerPage);
    const startIndex = (currentPage - 1) * entriesPerPage;
    const endIndex = startIndex + entriesPerPage;

    collegeBoxes.forEach((box, index) => {
        if (index >= startIndex && index < endIndex) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });

    updatePaginationButtons(totalPages);
}

function updatePaginationButtons(totalPages) {
    // Clear existing buttons
    paginationContainer.innerHTML = '';

    // Generate new buttons for all pages
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        if (i === currentPage) {
            button.classList.add('active');
        }
        button.addEventListener('click', () => {
            currentPage = i;
            displayEntries();
        });

        paginationContainer.appendChild(button);
    }

    // Disable/enable Prev and Next buttons
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
}

// event listeners for search input and dropdowns
searchInput.addEventListener('input', filterColleges);
levelSelect.addEventListener('change', filterColleges);
locationSelect.addEventListener('change', filterColleges);

// Pagination
// Event listener for Prev button
prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayEntries();
    }
});
// Event listener for Next button
nextButton.addEventListener('click', () => {
    const totalPages = Math.ceil(collegeBoxes.length / entriesPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayEntries();
    }
});
// Event listener for entries per page dropdown
entriesPerPageSelect.addEventListener('change', () => {
    entriesPerPage = parseInt(entriesPerPageSelect.value);
    currentPage = 1;
    displayEntries();
});
displayEntries();