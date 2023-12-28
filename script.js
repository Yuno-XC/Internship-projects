const textEL = document.getElementById('text');
const speakEL = document.getElementById('speak');
const languageSelect = document.getElementById('languageSelect');
const pitchSlider = document.getElementById('pitchSlider');
const speedSlider = document.getElementById('speedSlider');

speakEL.addEventListener('click', speakText);

function speakText() {
    window.speechSynthesis.cancel();

    const text = textEL.value;
    const selectedLanguage = languageSelect.value;
    const pitch = pitchSlider.value; // Get pitch value from slider
    const rate = speedSlider.value; // Get speed value from slider

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = selectedLanguage || 'en-US';
    utterance.pitch = pitch; // Set pitch based on slider value
    utterance.rate = rate; // Set rate based on slider value

    window.speechSynthesis.speak(utterance);
}

