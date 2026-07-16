function greetBoss() {

    let status = document.getElementById("status");

    status.innerHTML = "🎤 Listening...";

    const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        status.innerHTML = "❌ Voice Recognition not supported.";
        return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-IN";
    recognition.start();

    recognition.onresult = function(event) {

        let command = event.results[0][0].transcript.toLowerCase();

        status.innerHTML = "🗣 You Said : " + command;

        if (command.includes("hello")) {

            speak("Hello Boss, I am ready.");

        }

        else if (command.includes("trading")) {

            speak("Opening Trading Research.");

        }

        else if (command.includes("lead")) {

            speak("Opening Lead Finder.");

        }

        else if (command.includes("whatsapp")) {

            speak("Opening WhatsApp Assistant.");

        }

        else if (command.includes("email")) {

            speak("Opening Email Assistant.");

        }

        else if (command.includes("reminder")) {

            speak("Reminder feature coming soon.");

        }

        else {

            speak("Sorry Boss, I did not understand.");

        }

    }

}

function speak(text){

    const speech = new SpeechSynthesisUtterance();

    speech.text = text;

    speech.lang = "en-IN";

    window.speechSynthesis.speak(speech);

}
