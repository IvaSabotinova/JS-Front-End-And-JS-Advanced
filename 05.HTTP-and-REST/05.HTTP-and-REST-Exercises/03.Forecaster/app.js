function attachEvents() {
    const BASE_LOCATIONS = 'http://localhost:3030/jsonstore/forecaster/locations';
    const TODAY_URL = 'http://localhost:3030/jsonstore/forecaster/today/';
    const UPCOMING_URL = 'http://localhost:3030/jsonstore/forecaster/upcoming/';

    const weatherSymbols = {
        'Sunny': '&#x2600',
        'Partly sunny': '&#x26C5', // ⛅
        'Overcast': '&#x2601', // ☁
        'Rain': '&#x2614', // ☂
        'Degrees': '&#176',   // °
    }

    const inputLocation = document.getElementById('location');
    const submitBtn = document.getElementById('submit');
    const currentInfoDiv = document.getElementById('current');
    const upcomingInfoDiv = document.getElementById('upcoming');
    const forecastDiv = document.getElementById('forecast');      
    const labelCurrentInfoDiv = document.querySelector('#current .label');

    const forecastsDiv = document.createElement('div');
    const forecastInfoDiv = document.createElement('div');

    submitBtn.addEventListener('click', getWeather);

    function getWeather() {
        fetch(BASE_LOCATIONS)
            .then((res) => res.json())
            .then((data) => {
                let location = inputLocation.value;
                if (location) {
                    let currentLocation = data.find(x => x.name === location);
                    fetch(`${TODAY_URL}${currentLocation.code}`)
                        .then((res) => res.json())
                        .then((curData) => {
                            forecastsDiv.innerHTML = '';                
                            forecastsDiv.style.display = 'inline-block';
                            labelCurrentInfoDiv.textContent = 'Current conditions'
                            const name = curData.name;
                            const condition = curData.forecast.condition;
                            const high = curData.forecast.high;
                            const low = curData.forecast.low;
                            forecastsDiv.classList.add('forecasts');
                            const conditionSymbolSpan = createElements('span', weatherSymbols[condition], true, forecastsDiv, '', ['condition', 'symbol']);
                            const conditionMainSpan = createElements('span', '', false, forecastsDiv, '', ['condition']);
                            const nameSpan = createElements('span', name, false, conditionMainSpan, '', ['forecast-data']);
                            const degreesSpan = createElements('span', `${low}${weatherSymbols['Degrees']}/${high}${weatherSymbols['Degrees']}`, true, conditionMainSpan, '', ['forecast-data']);
                            const conditionSpan = createElements('span', condition, false, conditionMainSpan, '', ['forecast-data']);
                            currentInfoDiv.appendChild(forecastsDiv);

                        })

                    fetch(`${UPCOMING_URL}${currentLocation.code}`)
                        .then((res) => res.json())
                        .then((upcomingData) => {
                            const { forecast, name } = upcomingData;
                            upcomingInfoDiv.style.display = 'block';
                            forecastInfoDiv.innerHTML = '';
                            forecastDiv.style.display = 'block';
                            forecastInfoDiv.classList.add('forecast-info');
                            for (const { condition, high, low } of forecast) {
                                const upcomingSpan = createElements('span', '', false, forecastInfoDiv, '', ['upcoming']);
                                const symbolSpan = createElements('span', weatherSymbols[condition], true, upcomingSpan, '', ['symbol']);
                                const degreeSpan = createElements('span', `${low}${weatherSymbols['Degrees']}/${high}${weatherSymbols['Degrees']}`, true, upcomingSpan, '', ['forecast-data']);
                                const cndSpan = createElements('span', condition, false, upcomingSpan, '', ['forecast-data']);
                            }
                            upcomingInfoDiv.appendChild(forecastInfoDiv)
                        })
                }

            })
            .catch(() => {
                forecastDiv.style.display = 'block';
                labelCurrentInfoDiv.textContent = 'Error';
                forecastsDiv.style.display = 'none';
                upcomingInfoDiv.style.display = 'none';
            })

    }

    function createElements(type, contentOrValue, useInnerHTML, parentNode, id, classes, attributes) {
        const htmlElement = document.createElement(type);
        if (contentOrValue && useInnerHTML) {
            htmlElement.innerHTML = contentOrValue;
        }
        else {
            if (contentOrValue && type === 'input') {
                htmlElement.value = contentOrValue;
            }
            if (contentOrValue && type !== 'input') {
                htmlElement.textContent = contentOrValue;
            }
        }

        if (id) {
            htmlElement.id = id;
        }
        if (classes) {
            htmlElement.classList.add(...classes)
        }
        // {src: 'link', href : 'http'}
        if (attributes) {
            for (const key in attributes) {
                htmlElement.setAttribute(key, attributes[key])
            }
        }
        if (parentNode) {
            parentNode.appendChild(htmlElement);
        }
        return htmlElement;
    }



//My first solution

    // const divForecast = document.getElementById('forecast');
    // const submitBtn = document.getElementById('submit');
    // const location = document.getElementById('location');
    // const currentDiv = document.getElementById('current');
    // const upcomingDiv = document.getElementById('upcoming');    

    // const BASE_URL = 'http://localhost:3030/jsonstore/forecaster/locations/';
    // const CURRENT_CONDITION_URL = 'http://localhost:3030/jsonstore/forecaster/today/';
    // const UPCOMING_CONDITION_URL = 'http://localhost:3030/jsonstore/forecaster/upcoming/';
    // const newDiv = document.createElement('div');  

    // const weatherSymbols = {
    //     'Sunny': '&#x2600',
    //     'Partly sunny': '&#x26C5',
    //     'Overcast': '&#x2601',
    //     'Rain': '&#x2614',
    //     'Degrees': '&#176',

    // }
    // submitBtn.addEventListener('click', getWeather);

    // function getWeather() {
    //     fetch(`${BASE_URL}`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             divForecast.style.display = 'block';
    //             upcomingDiv.style.display = 'block';
    //             let locationVal = location.value;
    //             let searchedLocation = data.find(x=>x.name === locationVal);

    //             fetch(`${CURRENT_CONDITION_URL}${searchedLocation.code}`)
    //                 .then((res) => res.json())
    //                 .then((curData) => {
    //                     const { name, forecast } = curData;
    //                     if (name && forecast) {
    //                         const { condition, high, low } = forecast;
    //                         currentDiv.innerHTML = `<div class="label">Current conditions</div>
    //                         <div class="forecasts">
    //                             <span class = "condition symbol">${weatherSymbols[condition]}</span>
    //                             <span class="condition">
    //                                 <span class = "forecast-data">${name}</span>
    //                                 <span class = "forecast-data">${low}${weatherSymbols["Degrees"]}/${high}${weatherSymbols["Degrees"]}</span>
    //                                 <span class = "forecast-data">${condition}</span>
    //                             </span>                     
    //                         </div>`;
    //                     }

    //                 })

    //             fetch(`${UPCOMING_CONDITION_URL}${searchedLocation.code}`)
    //                 .then((res) => res.json())
    //                 .then((upcomingData) => {
    //                     const { forecast, name } = upcomingData;
    //                     newDiv.innerHTML = '';
    //                     if (forecast && name) {
    //                         newDiv.classList.add('forecast-info');
    //                         for (const { low, high, condition } of forecast) {
    //                             newDiv.innerHTML += `<span class = "upcoming">
    //                             <span class = "symbol">${weatherSymbols[condition]}</span>
    //                             <span class = "forecast-data">${low}${weatherSymbols["Degrees"]}/${high}${weatherSymbols["Degrees"]}</span>
    //                             <span class = "forecast-data">${condition}</span>
    //                         </span>`;
    //                         }
    //                         upcomingDiv.appendChild(newDiv);
    //                     }
    //                 })
    //         })
    //         .catch(() => {
    //             divForecast.style.display = 'block';
    //             currentDiv.textContent = 'Error';   
    //             upcomingDiv.style.display = 'none';          
    //         })

    // }
}

attachEvents();



