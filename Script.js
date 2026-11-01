
/* =================================
   ECHO 2.0 — CHAT ENGINE
   ================================= */

const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");
const chatMessages = document.getElementById("chat-messages");
const sendButton = document.getElementById("send-button");

// Add a message to the conversation
function addMessage(text, sender) {
    const message = document.createElement("div");
    message.className = `message ${sender}-message`;

    const avatar = document.createElement("div");
    avatar.className = "message-avatar";
    avatar.textContent = sender === "assistant" ? "E" : "Y";

    const content = document.createElement("div");
    content.className = "message-content";
    content.textContent = text;

    message.appendChild(avatar);
    message.appendChild(content);

    chatMessages.appendChild(message);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Simple demo responses
function getEchoResponse(message) {
    const text = message.toLowerCase().trim();

    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {
        return "Hello, captain! 🌙 I'm happy you're here.";
    }

    if (text.includes("your name")) {
        return "I'm Echo 2.0, your personal assistant.";
    }

    if (text.includes("how are you")) {
        return "I'm ready to help you. What shall we work on today?";
    }

    if (text.includes("help")) {
        return "Of course, captain. Tell me what you need help with.";
    }

    if (text.includes("thank")) {
        return "You're always welcome, captain. ❤️";
    }

    return "I received your message, captain. My full AI intelligence is not connected yet. We're building that next, step by step.";
}

// Handle message submission
chatForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const message = userInput.value.trim();

    if (!message) {
        return;
    }

    addMessage(message, "user");

    userInput.value = "";
    sendButton.disabled = true;

    setTimeout(function() {
        const response = getEchoResponse(message);

        addMessage(response, "assistant");

        sendButton.disabled = false;
        userInput.focus();
    }, 600);
});

console.log("Echo 2.0 chat engine loaded successfully.");
