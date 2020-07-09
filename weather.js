class Weather {
    constructor(city, state) {
        this.apiKey = "0e1250e2dc514ba28e33ffe53dd2011e";
        this.city = city;
        this.state = state;

    }

    //Fetch Weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=imperial`)

        const responseData = await response.json();

        return responseData;
    }

    //Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}