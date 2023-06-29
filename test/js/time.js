const apiKey = 'e0eb840c0078ea69deed6696c2a4bd07';

getLocation();

function getLocation() {  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showWeather);
  } else {
    // Geolocation not supported
  }  
}

function showWeather(position) {
  const { latitude, longitude } = position.coords;
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`)
    .then(res => res.json()) 
    .then(data => {
      const { timezone } = data;
      const { main: weather } = data.weather[0];
     
      const time = formatTime(timezone);  
      const weatherEl = document.getElementById('weather');  
      weatherEl.textContent = weather;
        
      const timeEl = document.getElementById('time');   
      timeEl.textContent = time;   
    });
}

function formatTime(timezone) {
  const offset = timezone / 60;
  const date = new Date(new Date().getTime() + (offset * 1000));
  
  const hour = date.getHours();
  const min = date.getMinutes();
  const period = hour >= 12 ? 'pm' : 'am';
  const hour12 = hour % 12;

  return `${hour12}:${min} ${period}`  
}