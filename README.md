Weather Dashboard Application
 Project Overview
      The Weather Dashboard Application is a web-based project developed using **HTML, CSS, and Vanilla JavaScript**. The main objective of this project is to fetch real-time weather data from a public API and present it to users in a clean, responsive, and user-friendly interface. Users can search for any city to view its current weather conditions and a 5-day forecast. The project demonstrates practical usage of asynchronous JavaScript, REST API integration, modular code organization, and browser storage.
      This project was built as part of an internship task to showcase frontend development skills, API handling, and real-world JavaScript usage without relying on frameworks like React.
 Setup Instructions
1.	Clone or download the project repository from GitHub.
2.	Ensure you have a stable internet connection (API-based project).
3.	Open the project folder in **VS Code**.
4.	Use **Live Server extension** to run `index.html`.
5.	Generate an API key from **OpenWeatherMap** and paste it into `js/api.js`.
6.	Refresh the browser and search for any city.
 Code Structure
weather-dashboard/
│
├── index.html
├── css/
│   └── styles.css
└── js/
    ├── api.js
    ├── app.js
    └── storage.js
•	index.html: Defines the structure of the application UI.
•	styles.css: Handles layout, responsiveness, and visual styling.
•	api.js: Manages all API calls to OpenWeatherMap.
•	app.js: Controls application logic, DOM manipulation, and event handling.
•	storage.js: Manages Local Storage operations.
API Integration
This project uses the OpenWeatherMap REST API.
Endpoints Used:
•	Current Weather: `/weather`
•	5-Day Forecast: `/forecast`
Features:
•	Uses `fetch()` with `async/await`.
•	Handles HTTP errors and invalid city responses.
•	Converts API JSON responses into UI-friendly data.
Asynchronous JavaScript Usage
Asynchronous operations are handled using:
•	`async/await` for cleaner syntax
•	`try...catch` blocks for error handling
This ensures the UI remains responsive while data is being fetched from the API.
 Data Handling
•	API responses are parsed using `response.json()`.
•	Only relevant data (temperature, humidity, weather description, wind speed) is extracted.
•	Forecast data is filtered to show one record per day (midday forecast).
Local Storage Implementation
Local Storage is used to enhance user experience by saving preferences.
Stored Data:
•	Last searched city name
Benefits:
•	Automatically loads the previously searched city on page reload.
•	Improves usability and persistence.
UI & Responsiveness
•	Fully responsive design using CSS Flexbox and Grid.
•	Works on desktop and mobile screens.
•	 Clear loading states and error messages.
Testing Evidence
Tested with multiple cities:
•	Chennai
•	Bangalore
•	London
•	New York
Edge Cases Tested:
•	Empty input
•	 Invalid city name
•	API failure / network issue
Visual Documentation
Screenshots included in the `screenshots/` folder:
•	Homepage UI
•	Weather results display
•	Error message display
•	 Mobile responsiveness
API Documentation (Summary)
 Base URL
```
https://api.openweathermap.org/data/2.5
```

Parameters
•	`q`: City name
•	`appid`: API key
•	`units`: metric
Sample Request
/weather?q=Chennai&appid=API_KEY&units=metric
Conclusion
The Weather Dashboard Application successfully demonstrates frontend development fundamentals including API integration, asynchronous JavaScript, modular architecture, Local Storage usage, and responsive UI design. This project meets all the technical and documentation requirements outlined in the internship task and serves as a strong foundation for more advanced frontend projects.
