class Textbox {
    constructor(selector, regex) {
        this._elements = document.querySelectorAll(selector);
        this._invalidSymbols = regex;

        Array.from(this._elements).forEach(x => x.addEventListener('input', () => {
            this._value = x.value;
            Array.from(this._elements).forEach(x => x.value = this._value);
        }))
    }

    get elements() {
        return this._elements;
    }

    get value() {
        return this._value;
    }

    set value(inputText) {
        this._value = inputText;
        Array.from(this._elements).forEach(x => x.value = this._value);
    }

    isValid() {
        if (this._invalidSymbols.test(this._value)) {
            return false;
        }

        return true;
    }
}



let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click', function () { console.log(textbox.value); });
