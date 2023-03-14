function flightSchedule(input) {
    let obj = {};
    let flights = input[0];
    let changedStatuses = input[1];
    let checkStatus = input[2].toString();
    let allFlights = [];
    for (const flight of flights) {
        let parts = flight.split(' ');
        obj = {
            flightNumber: parts.shift(),
            destination: parts.join(' '),
            status: 'Ready to fly'
        }
        allFlights.push(obj);
    }

    for (const item of changedStatuses) {
        let changed = item.split(' ');
        let changedFlight = allFlights.find(x => x.flightNumber === changed[0]);
        if (changedFlight) {
            changedFlight.status = 'Cancelled';
        }
    }
    if (checkStatus === 'Ready to fly') {
        for (const flight of allFlights.filter(x => x.status === 'Ready to fly')) {
            console.log(`{ Destination: '${flight['destination']}', Status: '${flight['status']}' }`)
        }
    }
    else {
        for (const flight of allFlights.filter(x => x.status === 'Cancelled')) {
            console.log(`{ Destination: '${flight['destination']}', Status: '${flight['status']}' }`)
        }
    }
}

// Improved Solution

function flightSchedule(input) {
    let obj = {};
    let flights = input[0];
    let changedStatuses = input[1];
    let checkStatus = input[2].toString();    
    for (const flight of flights) {
        let parts = flight.split(' ');
        let flightNumber = parts.shift();
        obj[flightNumber] = {
            destination: parts.join(' '),
            status: 'Ready to fly'
        }        
    }

    for (const item of changedStatuses) {
        let changed = item.split(' ');
        let flightNo = changed[0];
        let changedStatus = changed[1];
        if (obj.hasOwnProperty(flightNo)) {
            obj[flightNo].status = changedStatus;
        }
    }


    for (const [_flightNum, flightObj] of Object.entries(obj)) {
        if (flightObj.status === checkStatus) {
            console.log(`{ Destination: '${flightObj.destination}', Status: '${flightObj.status}' }`)
        }

    }
}


flightSchedule(
    [['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'],
    ['DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK430 Cancelled'],
    ['Cancelled']
    ]);

flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],
['Ready to fly']
]

)