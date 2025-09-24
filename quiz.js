// quiz.js

document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quiz-form');
    const quizResultDiv = document.getElementById('quiz-result');

    if (quizForm) {
        quizForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const formData = new FormData(quizForm);
            let score = {
                creative: 0,
                analytical: 0,
                social: 0,
                science: 0,
                math: 0,
                humanities: 0,
                independent: 0,
                team: 0,
                dynamic: 0
            };

            // Process answers for Q1
            const q1Answer = formData.get('q1');
            if (q1Answer) {
                score[q1Answer]++;
            }

            // Process answers for Q2
            const q2Answer = formData.get('q2');
            if (q2Answer) {
                score[q2Answer]++;
            }

            // Process answers for Q3
            const q3Answer = formData.get('q3');
            if (q3Answer) {
                score[q3Answer]++;
            }

            let resultText = '';
            let suggestedStream = '';
            let suggestedInterests = [];

            // Simple result mapping based on highest scores
            if (score.creative > 0 || score.humanities > 0) {
                resultText = "You seem to have a creative and expressive aptitude!";
                suggestedStream = "Arts/Humanities";
                suggestedInterests = hobbiesData.filter(h => h.hobby === "Reading & Writing" || h.hobby === "Art & Design").flatMap(h => h.suggestions.map(s => s.career));
            } else if (score.analytical > 0 || score.science > 0 || score.math > 0) {
                resultText = "Your strengths lean towards analytical thinking and problem-solving!";
                suggestedStream = "Science/Engineering";
                suggestedInterests = hobbiesData.filter(h => h.hobby === "Technology & Coding" || h.hobby === "Gaming").flatMap(h => h.suggestions.map(s => s.career));
            } else if (score.social > 0 || score.team > 0 || score.dynamic > 0) {
                resultText = "You excel in social interaction and dynamic environments!";
                suggestedStream = "Commerce/Management";
                suggestedInterests = hobbiesData.filter(h => h.hobby === "Sports & Fitness" || h.hobby === "Cooking & Baking").flatMap(h => h.suggestions.map(s => s.career));
            } else {
                resultText = "Please answer the quiz questions to get a personalized result.";
            }

            quizResultDiv.innerHTML = `
                <h3>Quiz Result:</h3>
                <p>${resultText}</p>
                ${suggestedStream ? `<p><strong>Suggested Stream:</strong> ${suggestedStream}</p>` : ''}
                ${suggestedInterests.length > 0 ? `<p><strong>Possible Career Interests:</strong> ${suggestedInterests.join(', ')}</p>` : ''}
                <button id="save-to-dashboard">Save to Dashboard</button>
            `;

            const saveButton = document.getElementById('save-to-dashboard');
            if (saveButton) {
                saveButton.addEventListener('click', () => {
                    localStorage.setItem('userStream', suggestedStream);
                    localStorage.setItem('userInterests', JSON.stringify(suggestedInterests));
                    alert('Your preferences have been saved to the dashboard!');
                });
            }
        });
    } else {
        console.error('Quiz form not found.');
    }
});
