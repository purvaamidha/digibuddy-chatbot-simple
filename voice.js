document.getElementById("voice-btn").addEventListener("click", function() {
    if (!("webkitSpeechRecognition" in window)) {
        alert("Sorry, your browser doesn't support speech recognition.");
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
