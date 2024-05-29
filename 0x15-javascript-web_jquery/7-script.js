// Fetches and replaces the name of the API data then replaces the name
// of the character in the DIV#character tag text

$.get('https://swapi.co/api/people/5/?format=json', function (data) {
  $('DIV#character').text(data.name);
});