// Announcement Page

const searchInputA = document.getElementById('input-box2');
const typeDropdown = document.querySelector('.announcement-types');
const announcementBoxes = document.querySelectorAll('.announcement-box');

// Function to filter announcements based on search and dropdown
function filterAnnouncements() {
    const searchText = searchInputA.value.toLowerCase();
    const selectedType = typeDropdown.value.toLowerCase();

    announcementBoxes.forEach((box) => {
        const title = box.querySelector('.announcement-title').textContent.toLowerCase();
        const type = box.querySelector('.announcement-type').textContent.toLowerCase();

        const matchesSearch = title.includes(searchText);
        const matchesType = selectedType === 'all types' || type === selectedType;

        if (matchesSearch && matchesType) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });
}

// event listeners for search input and dropdown
searchInputA.addEventListener('input', filterAnnouncements);
typeDropdown.addEventListener('change', filterAnnouncements);