function attachGradientEvents() {
    const button = document.getElementById('gradient');
    const result = document.getElementById('result');

    button.addEventListener('mousemove', calculate);
    button.addEventListener('mouseout', out);


    function calculate(e) {
        let calc = Math.floor(Number(e.offsetX / button.clientWidth * 100));
        result.textContent = `${calc}%`;
    }

    function out() {
        result.textContent = '';
    }
}
