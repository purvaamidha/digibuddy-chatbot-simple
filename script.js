document.getElementById("send-btn").addEventListener("click", function() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        addMessage("user-message", userInput);
        document.getElementById("user-input").value = "";  // Clear the input box
        getBotResponse(userInput);  // Fetch the bot's response
    }
});

function addMessage(sender, message) {
    const messageBox = document.createElement("div");
    messageBox.classList.add("message", sender);
    messageBox.innerText = message;
    document.getElementById("chat-box").appendChild(messageBox);
    document.getElementById("chat-box").scrollTop = document.getElementById("chat-box").scrollHeight;  // Auto scroll
}

function getBotResponse(input) {
    let botResponse = "I didn’t quite catch that. Can you ask again?";
    
    if (input.toLowerCase().includes("browser")) {
        botResponse = "A browser is like your digital window to the internet. You use it to visit websites!";
    } else if (input.toLowerCase().includes("email")) {
        botResponse = "An email is like sending a letter, but digitally. I can help you set one up if you want!";
    } else if (input.toLowerCase().includes("wifi")) {
        botResponse = "Wi-Fi issues can be frustrating! Try restarting your device or checking your router settings.";
    }
    
    setTimeout(function() {
        addMessage("bot-message", botResponse);
    }, 1000);
}
