function attachEventsListeners() {
    const inputSelectors = {
        daysInput: document.getElementById('days'),
        hoursInput: document.getElementById('hours'),
        minutesInput: document.getElementById('minutes'),
        secondsInput: document.getElementById('seconds'),
    }

    const convertButtons = {
        daysBtn: document.getElementById('daysBtn'),
        hoursBtn: document.getElementById('hoursBtn'),
        minutesBtn: document.getElementById('minutesBtn'),
        secondsBtn: document.getElementById('secondsBtn'),
    }

    const convertedValues = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    Object.values(convertButtons).map(x => x.addEventListener('click', calculate))

    function calculate(e) {
        if (e) {
            e.preventDefault();
        }
        const button = e.currentTarget;
        const input = button.parentNode.querySelector('input[type="text"]');
        if (input.value !== '') {
            const number = Number(input.value);
            const valueInDays = number / convertedValues[input.id];
            for (const input of Object.values(inputSelectors)) {
                input.value = valueInDays * convertedValues[input.id];
            }
        }

    }


    // Another solution

    // const daysBtn = document.getElementById('daysBtn');
    // const hoursBtn = document.getElementById('hoursBtn');
    // const minutesBtn = document.getElementById('minutesBtn');
    // const secondsBtn = document.getElementById('secondsBtn');
    // const inputDays = document.getElementById('days');
    // const inputHours = document.getElementById('hours');
    // const inputMinutes = document.getElementById('minutes');
    // const inputSeconds = document.getElementById('seconds');

    // daysBtn.addEventListener('click', calculate);
    // hoursBtn.addEventListener('click', calculate);
    // minutesBtn.addEventListener('click', calculate);
    // secondsBtn.addEventListener('click', calculate);

    // function calculate() {
    //     if (inputDays.value !== '') {
    //         let number = Number(inputDays.value)
    //         inputHours.value = number * 24;
    //         inputMinutes.value = inputHours.value * 60;
    //         inputSeconds.value = inputMinutes.value * 60;

    //     }
    //     else if (inputHours.value !== '') {
    //         let number = Number(inputHours.value)
    //         inputDays.value = number / 24;
    //         inputMinutes.value = inputHours.value * 60;
    //         inputSeconds.value = inputMinutes.value * 60;

    //     }
    //     else if (inputMinutes.value !== '') {
    //         let number = Number(inputMinutes.value)
    //         inputHours.value = number / 60;
    //         inputDays.value = inputHours.value / 24;
    //         inputSeconds.value = inputMinutes.value * 60;

    //     }
    //     else if (inputSeconds.value !== '') {
    //         let number = Number(inputSeconds.value)
    //         inputMinutes.value = number / 60;
    //         inputHours.value = inputMinutes.value / 60;
    //         inputDays.value = inputHours.value / 24;
    //     }
    // }
}
