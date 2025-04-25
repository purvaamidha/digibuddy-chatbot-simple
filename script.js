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
    let botResponse = "Whoa, that’s a big question! 🤔 Let me think...";
    const normalizedInput = input.toLowerCase();

    // Fun and interactive answers
    if (normalizedInput.includes("what is a browser")) {
        botResponse = "A browser is like a magic window to the internet! 🌐 You type in an address, and bam! You can explore the world! 🚀";
    } else if (normalizedInput.includes("how to set up an email")) {
        botResponse = "Setting up an email is like getting your digital mailbox! Just pick Gmail or Yahoo, and follow a few simple steps. 📧 Easy peasy!";
    } else if (normalizedInput.includes("how to make a video call")) {
        botResponse = "Video calls are like sending your face over the internet! 😁 Use apps like Zoom or WhatsApp, click 'Call,' and you’re on camera! 🎥";
    } else if (normalizedInput.includes("what is wifi")) {
        botResponse = "Wi-Fi is like your internet superhero! 🦸‍♂️ It flies through the air and connects your devices to the online world—no wires needed! ⚡";
    } else if (normalizedInput.includes("how to use whatsapp")) {
        botResponse = "WhatsApp is like texting your friends with a magic wand! 📱 You can text, send pictures, and even make calls! It's super fun!";
    } else if (normalizedInput.includes("how to shop online")) {
        botResponse = "Shopping online is like having a store in your pocket! 🛒 Pick what you like, pay, and the delivery truck shows up at your door! 🚚";
    } else if (normalizedInput.includes("how to use facebook")) {
        botResponse = "Facebook is like a digital scrapbook for your life! 📸 Share photos, status updates, and memories with your friends and family!";
    } else if (normalizedInput.includes("what is email")) {
        botResponse = "Email is like sending a letter, but in the blink of an eye! ✨ Type your message, hit 'send,' and your friend gets it instantly! 📩";
    } else if (normalizedInput.includes("tell me a fun fact")) {
        botResponse = "Did you know? The first email ever sent was in 1971! It said 'QWERTYUIOP.' How simple, huh? 😂";
    } else if (normalizedInput.includes("what is the internet")) {
        botResponse = "The internet is like a giant web where information is stored. It’s like the world’s library that never closes! 📚"
    } else if (normalizedInput.includes("admissions")) {
        botResponse = "Admissions can be tricky! But don't worry, check out the college websites or consult an advisor. 🎓";
    } else if (normalizedInput.includes("exams")) {
        botResponse = "Exams are important, but remember, it's not about studying all night. 😴 Plan your study schedule!";
    } else if (normalizedInput.includes("scholarships")) {
        botResponse = "Scholarships can be a game-changer! Look for them on college websites and external scholarship portals. 💸";
    } else if (normalizedInput.includes("career advice")) {
        botResponse = "Career advice? Focus on building skills, and don't forget to network with professionals. 🧑‍💻";
    } else {
        botResponse = "I didn’t quite catch that! 😅 Ask me more about the internet, social media, or college tips career scholarship exams or may be admissions, and I'll do my best to help!";
    }

    setTimeout(function() {
        addMessage("bot-message", botResponse);
    }, 1000);
}
