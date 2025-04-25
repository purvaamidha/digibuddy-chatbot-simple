const voiceButton = document.createElement("button");
voiceButton.innerText = "Speak";
document.body.appendChild(voiceButton);

voiceButton.addEventListener("click", function() {
    if (!("webkitSpeechRecognition" in window)) {
        alert("Speech recognition not supported in this browser.");
        return;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = function(event) {
        const voiceInput = event.results[0][0].transcript;
        document.getElementById("user-input").value = voiceInput;
        document.getElementById("send-btn").click();  // Trigger send after speech input
    };
});
