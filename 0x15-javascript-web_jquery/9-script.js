// Queries an API for wind speed in SF and replaces the text of the
// div#sf_wind_speed tag with the speed

$('document').ready(function () {
    $.get('https://fourtonfish.com/hellosalut/?lang=fr', function (data) {
      $('DIV#hello').text(data.hello);
    });
  });