// Variables
const textArea = document.getElementById("message-app");
const languajeList = document.getElementById("languaje-select");
const buttonConverter = document.getElementById("button-converter");

let synth = speechSynthesis;
let isSpeaking = true;

function voices() {
    for (let voice of synth.getVoices()) {
        let selected = voice.name === "Google español" ? "selected" : "";
        let option = `<option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`;
        languajeList.insertAdjacentHTML('beforeend', option)
    }
}

synth.addEventListener('voiceschanged', voices)

buttonConverter.addEventListener('click', (e) => {
    e.preventDefault();
    if (textArea.value != "") {
        if (!synth.speaking) {
            textToSpeech(textArea.value)
        }
        if (textArea.value.length > 80) {
            if (isSpeaking) {
                synth.resume();
                isSpeaking = false;
                buttonConverter.innerText = "Pausar";
            } else {
                synth.pause();
                isSpeaking = true;
                buttonConverter.innerText = "Continuar";
            }

            setInterval(() => {
                if (!synth.speaking && !isSpeaking) {
                    isSpeaking = true;
                    buttonConverter.innerText = "Convertir a voz";
                }
            });
        } else {
            buttonConverter.innerText = "Convertir a voz";
        }
    }
})

function textToSpeech(text) {
    let utternace = new SpeechSynthesisUtterance(text);
    for (let voice of synth.getVoices()) {
        if (voice.name === languajeList.value) {
            utternace.voice = voice;
        }
    }
    synth.speak(utternace)
}