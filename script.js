document.getElementById("send-btn").addEventListener("click", function() {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput !== "") {
        addMessage("user-message", userInput);
        document.getElementById("user-input").value = "";  // Clear the input box
        getBotResponse(userInput);  // Fetch the bot's response
    }
});

document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        const userInput = document.getElementById("user-input").value.trim();
        if (userInput !== "") {
            addMessage("user-message", userInput);
            document.getElementById("user-input").value = "";  // Clear the input box
            getBotResponse(userInput);
        }
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
    let botResponse = "Sorry, I didn't quite catch that. Could you please ask again?";

    const normalizedInput = input.toLowerCase();

    // Expanded knowledge base
    if (normalizedInput.includes("what is a browser")) {
        botResponse = "A browser is like a window to the internet. You use it to look at websites like Google or Facebook!";
    } else if (normalizedInput.includes("how to set up an email")) {
        botResponse = "Setting up an email is easy! Visit Gmail or Yahoo, create an account, and you're ready to send emails!";
    } else if (normalizedInput.includes("how to make a video call")) {
        botResponse = "Making a video call is fun! Use apps like Zoom or WhatsApp to call your friends and family with your camera.";
    } else if (normalizedInput.includes("what is wifi")) {
        botResponse = "Wi-Fi is like a magical invisible bridge that connects your device to the internet without any wires!";
    } else if (normalizedInput.includes("how to use whatsapp")) {
        botResponse = "WhatsApp is a great way to chat with friends! Just download the app, sign up with your phone number, and start chatting.";
    } else if (normalizedInput.includes("how to pay bills online")) {
        botResponse = "You can pay bills online by visiting your provider's website, logging in, and choosing the payment option. It's easy and safe!";
    } else if (normalizedInput.includes("how to shop online")) {
        botResponse = "Shopping online is like visiting a store from your home! Visit websites like Amazon, pick what you want, and check out!";
    } else if (normalizedInput.includes("how to use facebook")) {
        botResponse = "Facebook helps you connect with others! Create an account, add friends, and start posting pictures and updates!";
    } else if (normalizedInput.includes("what is email")) {
        botResponse = "An email is a way of sending messages over the internet. It's like writing a letter, but faster!";
    } else {
        botResponse = "I'm still learning! Ask me about things like email, Wi-Fi, video calls, and more. I'll try my best to help!";
    }

    setTimeout(function() {
        addMessage("bot-message", botResponse);
    }, 1000);
}
