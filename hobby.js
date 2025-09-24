// hobby.js

document.addEventListener('DOMContentLoaded', () => {
    const hobbyListContainer = document.getElementById('hobby-list');

    if (hobbyListContainer && typeof hobbiesData !== 'undefined') {
        hobbiesData.forEach(hobbyCategory => {
            const categoryDiv = document.createElement('div');
            categoryDiv.classList.add('hobby-category-card');

            const categoryTitle = document.createElement('h2');
            categoryTitle.textContent = hobbyCategory.hobby;
            categoryDiv.appendChild(categoryTitle);

            const suggestionsList = document.createElement('ul');
            hobbyCategory.suggestions.forEach(suggestion => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<strong>${suggestion.career}:</strong> ${suggestion.description}`;
                suggestionsList.appendChild(listItem);
            });
            categoryDiv.appendChild(suggestionsList);

            hobbyListContainer.appendChild(categoryDiv);
        });
        window.applyScrollRevealToCards('hobby-list', '.hobby-category-card');
    } else {
        console.error('Hobby list container not found or hobbiesData not loaded.');
    }
});
