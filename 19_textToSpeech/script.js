// ?References

let textarea = document.querySelector('textarea');
let button = document.querySelector('button');

let speech = new SpeechSynthesisUtterance();

// ?Function

let convertToVoice = () => {
    speech.text = textarea.value;
    window.speechSynthesis.speak(speech);
}

// ?Function Invokation

button.addEventListener('click', convertToVoice);