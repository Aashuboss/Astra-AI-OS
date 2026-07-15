// =========================
// ASTRA AI OS v1.0
// =========================

window.onload = function () {

    speak("Yes Boss. Astra AI Online.");

};

function speak(text) {

    const speech = new SpeechSynthesisUtterance();

    speech.text = text;
    speech.lang = "en-US";
    speech.rate = 0.9;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

}

function greetBoss() {

    let hour = new Date().getHours();

    let message = "";

    if (hour < 12) {
        message = "Good Morning Boss";
    }
    else if (hour < 17) {
        message = "Good Afternoon Boss";
    }
    else {
        message = "Good Evening Boss";
    }

    speak(message);

}
