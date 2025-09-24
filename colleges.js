// colleges.js

document.addEventListener('DOMContentLoaded', () => {
    const collegesContainer = document.getElementById('colleges-container');
    const streamSelect = document.getElementById('stream-select');

    function displayColleges(filterStream) {
        collegesContainer.innerHTML = ''; // Clear previous colleges

        const filteredColleges = collegesData.filter(college => {
            return filterStream === 'all' || college.stream === filterStream;
        });

        if (filteredColleges.length > 0) {
            filteredColleges.forEach((college, index) => {
                const collegeCard = document.createElement('div');
                collegeCard.classList.add('college-card', 'scroll-reveal');
                collegeCard.style.setProperty('--animation-order', index + 1);

                const collegeImage = document.createElement('img');
                collegeImage.src = college.image;
                collegeImage.alt = college.name;
                collegeImage.classList.add('college-image');
                collegeCard.appendChild(collegeImage);

                const collegeInfo = document.createElement('div');
                collegeInfo.classList.add('college-info');

                const collegeName = document.createElement('h2');
                collegeName.textContent = college.name;
                collegeInfo.appendChild(collegeName);

                const collegeLocation = document.createElement('p');
                collegeLocation.textContent = `Location: ${college.location}`;
                collegeInfo.appendChild(collegeLocation);

                const collegeDescription = document.createElement('p');
                collegeDescription.textContent = college.description;
                collegeInfo.appendChild(collegeDescription);

                collegeCard.appendChild(collegeInfo);
                collegesContainer.appendChild(collegeCard);
            });
            window.applyScrollRevealToCards('colleges-container', '.college-card');
        } else {
            collegesContainer.innerHTML = '<p>No colleges found for this stream.</p>';
        }
    }

    // Initial display of all colleges
    displayColleges('all');

    // Event listener for stream filter
    streamSelect.addEventListener('change', (event) => {
        displayColleges(event.target.value);
    });
});
