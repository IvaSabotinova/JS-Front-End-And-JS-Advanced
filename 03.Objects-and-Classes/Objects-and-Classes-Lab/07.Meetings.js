function meetings(input) {
    let schedule = {};
    for (const item of input) {
        let [weekday, name] = item.split(' ');
        if (schedule.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
            continue;
        }
        schedule[weekday] = name;
        console.log(`Scheduled for ${weekday}`)
    }

    for (const key in schedule) {
        console.log(`${key} -> ${schedule[key]}`)
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);

meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']
);