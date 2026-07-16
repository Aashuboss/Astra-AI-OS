function greetBoss() {

    const status = document.getElementById("status");

    status.innerHTML = "🎤 Listening Boss...";

    const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        status.innerHTML = "❌ Voice Recognition is not supported in this browser.";
        return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-IN";

    recognition.start();

    recognition.onresult = function(event) {

        const command = event.results[0][0].transcript.toLowerCase();

        status.innerHTML =
            "🗣️ You Said: <br><br><b>" + command + "</b>";

        if (command.includes("hello")) {
            speak("Hello Boss, I am ready.");
        }

        else if (command.includes("trading")) {
            speak("Opening Trading Research.");
            window.location.href = "trading.html";
        }

        else if (command.includes("lead")) {
            speak("Opening Lead Finder.");
            window.location.href = "leads.html";
        }

        else if (command.includes("whatsapp")) {
            speak("Opening WhatsApp Assistant.");
            window.location.href = "whatsapp.html";
        }

        else if (command.includes("email")) {
            speak("Opening Email Assistant.");
            window.location.href = "email.html";
        }

        else {
            speak("Sorry Boss, I did not understand.");
        }

    };

}

function speak(text) {

    const speech = new SpeechSynthesisUtterance();

    speech.text = text;

    speech.lang = "en-IN";

    window.speechSynthesis.speak(speech);

}
