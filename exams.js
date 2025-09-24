// exams.js

document.addEventListener('DOMContentLoaded', () => {
    const examsContainer = document.getElementById('exams-container');
    const examStreamSelect = document.getElementById('exam-stream-select');

    function displayExams(filterStream) {
        examsContainer.innerHTML = ''; // Clear previous exams

        const filteredExams = examsData.filter(exam => {
            return filterStream === 'all' || exam.stream === filterStream;
        });

        if (filteredExams.length > 0) {
            filteredExams.forEach(exam => {
                const examCard = document.createElement('div');
                examCard.classList.add('exam-card');

                const examName = document.createElement('h2');
                examName.textContent = exam.name;
                examCard.appendChild(examName);

                const examDescription = document.createElement('p');
                examDescription.textContent = exam.description;
                examCard.appendChild(examDescription);

                const officialLink = document.createElement('a');
                officialLink.href = exam.officialLink;
                officialLink.textContent = 'Visit Official Website';
                officialLink.target = '_blank';
                officialLink.classList.add('button', 'exam-link-button');
                examCard.appendChild(officialLink);

                examsContainer.appendChild(examCard);
            });
            window.applyScrollRevealToCards('exams-container', '.exam-card');
        } else {
            examsContainer.innerHTML = '<p>No exams found for this stream.</p>';
        }
    }

    // Initial display of all exams
    displayExams('all');

    // Event listener for stream filter
    examStreamSelect.addEventListener('change', (event) => {
        displayExams(event.target.value);
    });
});
