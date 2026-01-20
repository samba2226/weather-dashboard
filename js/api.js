const API_KEY = "034d04ba0df636696759a7439d2f94a8";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function getCurrentWeather(city) {
  const res = await fetch(
    `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "City not found");
  }

  return data;
}

export async function getForecast(city) {
  const res = await fetch(
    `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Forecast not available");
  }

  return data;
}
