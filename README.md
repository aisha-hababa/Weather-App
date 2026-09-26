# 🌤️ Weather App

A modern and responsive weather application built with HTML, CSS, and JavaScript.

The application allows users to search for a city and view current weather conditions, detailed weather information, and a 5-day forecast.

## ✨ Features

- 🔍 Search for weather by city
- 🌡️ Display current temperature
- ☁️ Display current weather condition
- 💧 Display humidity
- 💨 Display wind speed
- 🌡️ Display feels-like temperature
- 📊 Display atmospheric pressure
- 👁️ Display visibility
- 🌅 Display sunrise time
- 🌇 Display sunset time
- 📅 Display a 5-day weather forecast
- 🖼️ Dynamic weather icons
- 🎨 Dynamic background based on weather conditions
- ⏳ Animated loading state
- ⚠️ Error message for invalid cities
- 📱 Responsive design for different screen sizes
- ✨ Modern glassmorphism-inspired UI
- ⚡ Real-time weather data using an external API

## 🛠️ Technologies Used

- **HTML5** — Semantic page structure
- **CSS3** — Responsive layout, gradients, animations, glassmorphism, and visual effects
- **JavaScript (ES6)** — API integration, DOM manipulation, event handling, and dynamic content
- **OpenWeather API** — Weather and forecast data
- **Google Fonts** — Inter font family

## 🌐 API

This project uses the **OpenWeather API** to retrieve current weather conditions and forecast data.

The application uses:

- Current Weather API
- 5-Day / 3-Hour Forecast API

## 📂 Project Structure

```text
Weather-App/
│
├── index.html
├── style.css
├── script.js
├── images/
│   ├── clear.png
│   ├── clouds.png
│   ├── drizzle.png
│   ├── mist.png
│   ├── rain.png
│   └── search.png
│
└── README.md
🚀 Getting Started
1. Clone the repository
git clone https://github.com/aisha-hababa/Weather-App.git
2. Open the project
cd Weather-App
3. Run the application

Open index.html in your browser.

You can also use the Live Server extension in VS Code for development.

🔑 API Configuration

The application requires an OpenWeather API key.

In script.js, the API key is used to request weather data:

const apiKey = "YOUR_API_KEY";

For a real production project, API keys should not be exposed directly in client-side JavaScript. A backend or environment-based solution can be used to protect sensitive credentials.

🎨 User Interface

The interface uses a modern dark glassmorphism-inspired design with:

Dynamic weather-based backgrounds
Rounded cards
Soft shadows
Gradient elements
Animated weather icons
Responsive layouts
Interactive hover effects
📱 Responsive Design

The application is designed to work across:

💻 Desktop
📱 Mobile
📲 Small-screen devices

CSS media queries are used to adapt the layout for different screen sizes.

🎯 Project Purpose

This project was created as a frontend development project to practice working with external APIs and building dynamic web applications.

The project focuses on:

API integration
Fetch API
Async/Await
DOM manipulation
Event handling
Dynamic content rendering
Error handling
Responsive web design
CSS animations
Modern UI design
🔮 Future Improvements
 Add automatic location detection
 Add hourly forecast
 Add more weather conditions and icons
 Add temperature unit conversion
 Add dark/light theme options
 Add recent searches
 Add favorite cities
 Add weather charts
 Improve accessibility
 Protect API credentials using a backend service

👩‍💻 Author

Aisha Hababa

Software Engineering Graduate

Frontend Development • UI/UX Design

🔗 Repository

View Weather App on GitHub
