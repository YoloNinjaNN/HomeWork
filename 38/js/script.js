document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchQuery = document.getElementById('searchInput').value;
    const typeQuery = document.getElementById('typeSelect').value;
    searchMovies(searchQuery, typeQuery, 1);
});

function searchMovies(query, type, page) {
    const apiKey = 'eaea62cf';
    const url = `http://www.omdbapi.com/?s=${encodeURIComponent(query)}&type=${type}&page=${page}&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                displayResults(data.Search, data.totalResults);
            } else {
                document.getElementById('results').innerHTML = '<p>Movie not found!</p>';
            }
        })
        .catch(error => console.error('Error:', error));
}

function displayResults(movies, totalResults) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = movies.map(movie => `
        <div class="movie-item">
            <h3>${movie.Title} (${movie.Year})</h3>
            <button onclick="showDetails('${movie.imdbID}')">Details</button>
        </div>
    `).join('');

    if (totalResults > 10) {
        const totalPages = Math.ceil(totalResults / 10);
        let pagination = '<div>';
        for (let i = 1; i <= totalPages; i++) {
            pagination += `<button onclick="searchMovies('${document.getElementById('searchInput').value}', '${document.getElementById('typeSelect').value}', ${i})">${i}</button>`;
        }
        pagination += '</div>';
        resultsDiv.innerHTML += pagination;
    }
}

function showDetails(imdbID) {
    const apiKey = 'eaea62cf';
    const url = `http://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('details').innerHTML = `
                <h2>${data.Title}</h2>
                <p>${data.Plot}</p>
                <p>Рік: ${data.Year}</p>
                <p>Режисер: ${data.Director}</p>
                <p>Актори: ${data.Actors}</p>
                <p>Рейтинг: ${data.imdbRating}</p>
            `;
        })
        .catch(error => console.error('Error:', error));
}