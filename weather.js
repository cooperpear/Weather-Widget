class Weather {
    constructor(city, state) {
        this.apiKey = "d06517398e8aaaadf62b3b9e18d611c1";
        this.city = city;
        this.state = state;

    }

    //Fetch Weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=imperial`)

        const responseData = await response.json();
        return responseData.current_observation;
    }
}