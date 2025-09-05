# React Weather App

A sleek and responsive weather application built with React and styled with Tailwind CSS. It provides real-time weather data and a 5-day forecast for any city in the world, leveraging the OpenWeatherMap API.

## Features

* **Current Weather:** Get the current temperature, weather conditions, humidity, wind speed, and more.
* **5-Day Forecast:** View a detailed 5-day weather forecast with daily high and low temperatures.
* **Search by City:** Easily search for any city to get its weather information.
* **Responsive Design:** A clean and modern user interface that looks great on any device.
* **Animated Icons:** Dynamic and animated weather icons that change based on the weather conditions.

## Tech Stack

* **Frontend:**
    * React
    * Tailwind CSS
* **API:**
    * OpenWeatherMap API

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js and npm (or yarn)
* An OpenWeatherMap API key

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/weather.git](https://github.com/your-username/weather.git)
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Get your OpenWeatherMap API key:**
    * Go to [openweathermap.org](https://openweathermap.org/) and sign up for a free account.
    * Navigate to the "API keys" section to get your key.

4.  **Set up your environment variables:**
    * Create a `.env` file in the root of the project.
    * Add your API key to the `.env` file:
        ```env
        VITE_OPENWEATHER_API_KEY=your_api_key
        ```

5.  **Start the development server:**
    ```sh
    npm run dev
    ```

    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## API Usage

This project utilizes the [OpenWeatherMap API](https://openweathermap.org/api) to fetch current weather data and forecasts. A free API key is required and can be obtained by signing up on their website.

## Contributing

Contributions are welcome! If you have suggestions for improvements, please fork the repo and create a pull request, or open an issue with the "enhancement" tag.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request
