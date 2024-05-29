// Queries an API and fetches all movie titles then inserts them
// into the UL#list_movies tag

$.get('https://swapi.co/api/films/?format=json', function (data) {
  $('UL#list_movies').append(...data.results.map(movie => `<li>${movie.title}</li>`));
});