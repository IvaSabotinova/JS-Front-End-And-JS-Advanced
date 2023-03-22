function attachEventsListeners() {
    const daysBtn = document.getElementById('daysBtn');
    const hoursBtn = document.getElementById('hoursBtn');
    const minutesBtn = document.getElementById('minutesBtn');
    const secondsBtn = document.getElementById('secondsBtn');
    const inputDays = document.getElementById('days');
    const inputHours = document.getElementById('hours');
    const inputMinutes = document.getElementById('minutes');
    const inputSeconds = document.getElementById('seconds');

    daysBtn.addEventListener('click', calculate);
    hoursBtn.addEventListener('click', calculate);
    minutesBtn.addEventListener('click', calculate);
    secondsBtn.addEventListener('click', calculate);

    function calculate() {
        if (inputDays.value !== '') {
            let number = Number(inputDays.value)
            inputHours.value = number * 24;
            inputMinutes.value = inputHours.value * 60;
            inputSeconds.value = inputMinutes.value * 60;

        }
        else if (inputHours.value !== '') {
            let number = Number(inputHours.value)
            inputDays.value = number / 24;
            inputMinutes.value = inputHours.value * 60;
            inputSeconds.value = inputMinutes.value * 60;

        }
        else if (inputMinutes.value !== '') {
            let number = Number(inputMinutes.value)
            inputHours.value = number / 60;
            inputDays.value = inputHours.value / 24;
            inputSeconds.value = inputMinutes.value * 60;

        }
        else if (inputSeconds.value !== '') {
            let number = Number(inputSeconds.value)
            inputMinutes.value = number / 60;
            inputHours.value = inputMinutes.value / 60;
            inputDays.value = inputHours.value / 24;
        }
    }
}