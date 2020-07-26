/* eslint-disable indent */
const apiKey = config.API_KEY;
window.addEventListener('load', () => {
  let long;
  let lat;
  const temperature = document.querySelector('.temperature-degree');
  const location = document.querySelector('.location-timezone');
  const description = document.querySelector('.temperature-description');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
      fetch(api)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          const roundedTemp = Math.round(data.main.temp);
          temperature.innerHTML = `<h2>${roundedTemp}<h2>`;
          location.innerHTML = `<h2>${data.name}<h2>`;
          description.innerHTML = `<h2>${data.weather[0].description}<h2>`;
          const icon = data.weather[0].main;
          let SkyconIcon;
          const skycons = new Skycons({ color: 'white' });
          if (icon == 'Clouds') {
            SkyconIcon = 'CLOUDY';
            skycons.add(document.querySelector('.icon'), SkyconIcon);
          } else if (icon == 'Rain') {
            SkyconIcon = 'RAIN';
            skycons.add(document.querySelector('.icon'), SkyconIcon);
          }
          skycons.play();
        });
    });
  } else {
    h1.textContent =
      'Hello! We cant show your current weather if you dont allow for useto use your location data.';
  }

  function setIcons(icon, iconID) {
    const skycons = new Skycons({ color: 'white' });
    const currentIcon = icon;
    if ((icon = 'Cloudy')) {
      icon = 'PARTLY_CLOUDY_DAY';
    }
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
  }
});
const input = document.getElementById('search');
input.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById('btn').click();
  }
});
function getWeather() {
  const temperature = document.querySelector('.temperature-degree');
  const location = document.querySelector('.location-timezone');
  const description = document.querySelector('.temperature-description');
  const input = document.getElementById('search').value;
  const skycons = new Skycons({ color: 'white' });
  const api = `http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`;
  fetch(api)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const roundedTemp = Math.round(data.main.temp);
      temperature.innerHTML = `<h2>${roundedTemp}<h2>`;
      location.innerHTML = `<h2>${data.name}<h2>`;
      description.innerHTML = `<h2>${data.weather[0].description}<h2>`;
      const icon = data.weather[0].main;
      let SkyconIcon;
      const skycons = new Skycons({ color: 'white' });
      if (icon == 'Clouds') {
        SkyconIcon = 'CLOUDY';
        skycons.add(document.querySelector('.icon'), SkyconIcon);
      } else if (icon == 'Rain') {
        SkyconIcon = 'RAIN';
        skycons.add(document.querySelector('.icon'), SkyconIcon);
      } else if (icon == 'Snow') {
        SkyconIcon = 'SNOW';
        skycons.add(document.querySelector('.icon'), SkyconIcon);
      } else if (
        icon == 'Mist' ||
        icon == 'Smoke' ||
        icon == 'Haze' ||
        icon == 'Dust' ||
        icon == 'Fog'
      ) {
        SkyconIcon = 'FOG';
        skycons.add(document.querySelector('.icon'), SkyconIcon);
      } else if (icon == 'Clear') {
        SkyconIcon = 'CLEAR_DAY';
        skycons.add(document.querySelector('.icon'), SkyconIcon);
      }
      skycons.play();
    });
}
