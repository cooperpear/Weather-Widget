class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feelsLike');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        //API specific here
        this.location.textContent = weather.name;
        // this.desc.textContent = weather.weather..description;
        this.string.textContent = weather.main.temp;

        this.humidity.textContent = `Relative Humidity ${weather.main.humidity}`;
        // this.feelsLike.textContent = `Feels Like ${weather.main.feels_like}`;
        this.dewpoint.textContent = `Dew Point ${weather.dewpoint_string}`;
        this.wind.textContent = `Wind ${weather.wind.speed} mph`;

    }
}