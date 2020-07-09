//Init Storage
const storage = new Storage();
//Get stored location data
//Initialize weather object
const weather = new Weather('Austin', 'TX');
//Init UI
const ui = new UI();



//Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    // const state = document.getElementById('state').value;

    weather.changeLocation('Miami');

    //Get and display weather
    getWeather();

    //Close modal
    $('#locModal').modal('hide');
});

function getWeather() {
    weather.getWeather()
        .then(results => {
            console.log(results);
            ui.paint(results);
        })
        .catch(err => console.log(err));
}

