function attachEvents() {
    const divForecast = document.getElementById('forecast');
    const submitBtn = document.getElementById('submit');
    const location = document.getElementById('location');
    const currentDiv = document.getElementById('current');
    const upcomingDiv = document.getElementById('upcoming');    

    const BASE_URL = 'http://localhost:3030/jsonstore/forecaster/locations/';
    const CURRENT_CONDITION_URL = 'http://localhost:3030/jsonstore/forecaster/today/';
    const UPCOMING_CONDITION_URL = 'http://localhost:3030/jsonstore/forecaster/upcoming/';
    const newDiv = document.createElement('div');  

    const weatherSymbols = {
        'Sunny': '&#x2600',
        'Partly sunny': '&#x26C5',
        'Overcast': '&#x2601',
        'Rain': '&#x2614',
        'Degrees': '&#176',

    }
    submitBtn.addEventListener('click', getWeather);

    function getWeather() {
        fetch(`${BASE_URL}`)
            .then((res) => res.json())
            .then((data) => {
                divForecast.style.display = 'block';
                upcomingDiv.style.display = 'block';
                let locationVal = location.value;
                let searchedLocation = data.find(x=>x.name === locationVal);
             
                fetch(`${CURRENT_CONDITION_URL}${searchedLocation.code}`)
                    .then((res) => res.json())
                    .then((curData) => {
                        const { name, forecast } = curData;
                        if (name && forecast) {
                            const { condition, high, low } = forecast;
                            currentDiv.innerHTML = `<div class="label">Current conditions</div>
                            <div class="forecasts">
                                <span class = "condition symbol">${weatherSymbols[condition]}</span>
                                <span class="condition">
                                    <span class = "forecast-data">${name}</span>
                                    <span class = "forecast-data">${low}${weatherSymbols["Degrees"]}/${high}${weatherSymbols["Degrees"]}</span>
                                    <span class = "forecast-data">${condition}</span>
                                </span>                     
                            </div>`;
                        }

                    })

                fetch(`${UPCOMING_CONDITION_URL}${searchedLocation.code}`)
                    .then((res) => res.json())
                    .then((upcomingData) => {
                        const { forecast, name } = upcomingData;
                        newDiv.innerHTML = '';
                        if (forecast && name) {
                            newDiv.classList.add('forecast-info');
                            for (const { low, high, condition } of forecast) {
                                newDiv.innerHTML += `<span class = "upcoming">
                                <span class = "symbol">${weatherSymbols[condition]}</span>
                                <span class = "forecast-data">${low}${weatherSymbols["Degrees"]}/${high}${weatherSymbols["Degrees"]}</span>
                                <span class = "forecast-data">${condition}</span>
                            </span>`;
                            }
                            upcomingDiv.appendChild(newDiv);
                        }
                    })
            })
            .catch(() => {
                divForecast.style.display = 'block';
                currentDiv.textContent = 'Error';   
                upcomingDiv.style.display = 'none';          
            })
    }
}

attachEvents();

