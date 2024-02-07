const searchInput = document.getElementById("searchMovie");
const movieContainer = document.querySelector(".container");

// request OMDB API

searchInput.addEventListener("input", fetchData);

function fetchData() {
  fetch(
    `http://www.omdbapi.com/?i=tt3896198&apikey=50ce94bb&s=${searchInput.value}`
  )
    .then((response) => response.json())
    .then((response) => {
      displayMovies(response["Search"]);
    })
    .catch((err) => console.log("Error: ", err));
}

function displayMovies(movies) {
  let html = "";

  movies.forEach((element) => {
    html += `
                <div class="movie">
                    <img src="${element.Poster}" alt="">
                    <h3>${element.Title}</h3>
                    <p>${element.Year}</p>
                    <button><a href="/details.html?id=${element.imbdID}">view more</a></button>
                </div>
                `;
  });

  movieContainer.innerHTML = html;
}
