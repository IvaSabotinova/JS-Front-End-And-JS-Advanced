function getInfo() {
    const stopId = document.getElementById('stopId').value;
    const stopName = document.getElementById('stopName');
    const ulBuses = document.getElementById('buses');
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/';
    ulBuses.innerHTML = '';
    
    fetch(`${BASE_URL}${stopId}`)
        .then((res) => res.json())
        .then((data) => {
            const { buses, name } = data;
            stopName.textContent = name;
            for (const busNo in buses) {
                const newLi = document.createElement('li');
                newLi.textContent = `Bus ${busNo} arrives in ${buses[busNo]} minutes`;
                ulBuses.appendChild(newLi);
            }
        }).catch(() => {
            stopName.textContent = 'Error';
        })
}