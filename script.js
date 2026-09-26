const apiKey = "802ff85827920f94c94affc496947bbf";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const forecastUrl =
  "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  document.querySelector(".loading").style.display = "block";
  document.querySelector(".weather").style.display = "none";
  document.querySelector(".error").style.display = "none";

  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".loading").style.display = "none";
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    console.log(data);

    const weatherCondition = data.weather[0].main.toLowerCase();
    document.body.className = weatherCondition;

    const sunrise = new Date(data.sys.sunrise * 1000);
    const sunset = new Date(data.sys.sunset * 1000);

    const sunriseTime = sunrise.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const sunsetTime = sunset.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".description").innerHTML =
      data.weather[0].description;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML =
      (data.wind.speed * 3.6).toFixed(1) + " km/h";
    document.querySelector(".feels-like").innerHTML =
      Math.round(data.main.feels_like) + "°C";
    document.querySelector(".pressure").innerHTML = data.main.pressure + " hPa";
    document.querySelector(".visibility").innerHTML =
      (data.visibility / 1000).toFixed(1) + " km";
    document.querySelector(".sunrise").innerHTML = sunriseTime;
    document.querySelector(".sunset").innerHTML = sunsetTime;

    weatherIcon.src = getWeatherIcon(data.weather[0].main);

    document.querySelector(".loading").style.display = "none";
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    getForecast(city);
  }
}

async function getForecast(city) {
  const response = await fetch(forecastUrl + city + `&appid=${apiKey}`);
  const data = await response.json();

  console.log("Forecast:", data);

  const forecastList = document.querySelector(".forecast-list");
  forecastList.innerHTML = "";

  const dailyForecast = {};
  data.list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];

    if (!dailyForecast[date]) {
      dailyForecast[date] = item;
    }
  });

  const days = Object.values(dailyForecast).slice(0, 5);
  days.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("forecast-card");
    const day = document.createElement("p");
    day.classList.add("forecast-day");
    day.innerHTML = getDayName(item.dt);

    const icon = document.createElement("img");
    icon.classList.add("forecast-icon");
    icon.src = getWeatherIcon(item.weather[0].main);
    icon.alt = item.weather[0].description;

    const temp = document.createElement("p");
    temp.classList.add("forecast-temp");
    temp.innerHTML = Math.round(item.main.temp) + "°C";

    const description = document.createElement("p");
    description.classList.add("forecast-description");
    description.innerHTML = item.weather[0].description;

    card.appendChild(day);
    card.appendChild(icon);
    card.appendChild(temp);
    card.appendChild(description);

    forecastList.appendChild(card);
  });
}

function getDayName(timestamp) {
  const date = new Date(timestamp * 1000);

  return date.toLocaleDateString("en-US", {
    weekday: "short",
  });
}

function getWeatherIcon(weather) {
  if (weather == "Clouds") {
    return "images/clouds.png";
  } else if (weather == "Clear") {
    return "images/clear.png";
  } else if (weather == "Rain") {
    return "images/rain.png";
  } else if (weather == "Drizzle") {
    return "images/drizzle.png";
  } else if (weather == "Mist") {
    return "images/mist.png";
  } else {
    return "images/clouds.png";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
searchBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});
