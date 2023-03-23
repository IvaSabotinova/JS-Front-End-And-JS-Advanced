function encodeAndDecodeMessages() {
    let textAreaOne = Array.from(document.querySelectorAll('textarea'))[0];
    let textAreaTwo = Array.from(document.querySelectorAll('textarea'))[1];
    const buttonSend = Array.from(document.querySelectorAll('button'))[0];
    const buttonDecode = Array.from(document.querySelectorAll('button'))[1];
    buttonSend.addEventListener('click', encode);
    buttonDecode.addEventListener('click', decodeAndRead)
    
    function encode() {
        let text = textAreaOne.value;  
        let result = '';        
        for (let index = 0; index < text.length; index++) {           
            result += String.fromCharCode(text.charCodeAt(index) + 1);           
        }
        textAreaTwo.value = result;
        textAreaOne.value = '';      
    }

    function decodeAndRead(){
        let result = '';       
        for (let index = 0; index < textAreaTwo.value.length; index++) {
            result += String.fromCharCode(textAreaTwo.value.charCodeAt(index) - 1);              
        }
        textAreaTwo.value = result;        
    }
}


