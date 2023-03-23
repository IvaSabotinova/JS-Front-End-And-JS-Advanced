function attachEventsListeners() {
    const input = document.getElementById('inputDistance');
    const output = document.getElementById('outputDistance');
    const btnConvert = document.getElementById('convert');
    const selectInput = document.getElementById('inputUnits');
    const selectOutput = document.getElementById('outputUnits');
    btnConvert.addEventListener('click', convert);

    function convert() {
        const unitsPerMeter = {
            km: 1000,
            m: 1,
            cm: 0.01,
            mm: 0.001,
            mi: 1609.34,
            yrd: 0.9144,
            ft: 0.3048,
            in: 0.0254,
        };

        let valueInMeters = input.value * unitsPerMeter[selectInput.value];
        let outputValue = valueInMeters / unitsPerMeter[selectOutput.value];
        output.value = outputValue;

    }
}

