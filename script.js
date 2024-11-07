document.querySelector('.search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const searchTerm = document.querySelector('#search-input').value;
    console.log("Search Term:", searchTerm);
});
