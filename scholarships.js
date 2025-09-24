// scholarships.js

document.addEventListener('DOMContentLoaded', () => {
    const scholarshipsContainer = document.getElementById('scholarships-container');
    const scholarshipTypeSelect = document.getElementById('scholarship-type-select');

    function displayScholarships(filterType) {
        scholarshipsContainer.innerHTML = ''; // Clear previous scholarships

        const filteredScholarships = scholarshipsData.filter(scholarship => {
            return filterType === 'all' || scholarship.type === filterType;
        });

        if (filteredScholarships.length > 0) {
            filteredScholarships.forEach(scholarship => {
                const scholarshipCard = document.createElement('div');
                scholarshipCard.classList.add('scholarship-card');

                const scholarshipName = document.createElement('h2');
                scholarshipName.textContent = scholarship.name;
                scholarshipCard.appendChild(scholarshipName);

                const scholarshipDescription = document.createElement('p');
                scholarshipDescription.textContent = scholarship.description;
                scholarshipCard.appendChild(scholarshipDescription);

                const officialLink = document.createElement('a');
                officialLink.href = scholarship.link;
                officialLink.textContent = 'Apply Now';
                officialLink.target = '_blank';
                officialLink.classList.add('button', 'scholarship-link-button');
                scholarshipCard.appendChild(officialLink);

                scholarshipsContainer.appendChild(scholarshipCard);
            });
            window.applyScrollRevealToCards('scholarships-container', '.scholarship-card');
        } else {
            scholarshipsContainer.innerHTML = '<p>No scholarships found for this type.</p>';
        }
    }

    // Initial display of all scholarships
    displayScholarships('all');

    // Event listener for type filter
    scholarshipTypeSelect.addEventListener('change', (event) => {
        displayScholarships(event.target.value);
    });
});
