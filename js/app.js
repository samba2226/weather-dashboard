import { getCurrentWeather, getForecast } from "./api.js";
import { saveCity, getSavedCity } from "./storage.js";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const currentWeatherEl = document.getElementById("currentWeather");
const forecastEl = document.getElementById("forecast");
const loadingEl = document.getElementById("loading");
const errorEl = document.getElementById("error");

function showLoading() {
  loadingEl.classList.remove("hidden");
}

function hideLoading() {
  loadingEl.classList.add("hidden");
}

function showError(msg) {
  errorEl.textContent = msg;
  errorEl.classList.remove("hidden");
}

function hideError() {
  errorEl.classList.add("hidden");
}

function displayCurrentWeather(data) {
  currentWeatherEl.innerHTML = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <h1>${Math.round(data.main.temp)}°C</h1>
    <p>${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind: ${data.wind.speed} m/s</p>
  `;
  currentWeatherEl.classList.remove("hidden");
}

function displayForecast(data) {
  forecastEl.innerHTML = "";
  forecastEl.classList.remove("hidden");

  const days = data.list.filter(item =>
    item.dt_txt.includes("12:00:00")
  );

  days.forEach(day => {
    const div = document.createElement("div");
    div.className = "day";
    div.innerHTML = `
      <h4>${day.dt_txt.split(" ")[0]}</h4>
      <p>${Math.round(day.main.temp)}°C</p>
      <p>${day.weather[0].description}</p>
    `;
    forecastEl.appendChild(div);
  });
}

async function loadWeather(city) {
  if (!city) {
    showError("Please enter a city");
    return;
  }

  try {
    hideError();
    showLoading();

    const current = await getCurrentWeather(city);
    const forecast = await getForecast(city);

    displayCurrentWeather(current);
    displayForecast(forecast);
    saveCity(city);
  } catch (err) {
    showError(err.message);
  } finally {
    hideLoading();
  }
}

searchBtn.addEventListener("click", () => {
  loadWeather(cityInput.value.trim());
});

cityInput.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    loadWeather(cityInput.value.trim());
  }
});

const savedCity = getSavedCity() || "Chennai";
cityInput.value = savedCity;
loadWeather(savedCity);
