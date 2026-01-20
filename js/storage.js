const STORAGE_KEY = "last_city";

export function saveCity(city) {
  localStorage.setItem(STORAGE_KEY, city);
}

export function getSavedCity() {
  return localStorage.getItem(STORAGE_KEY);
}
