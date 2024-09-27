document.getElementById("send-button").addEventListener("click", function() {
    const messageInput = document.getElementById("message-input");
    const messageText = messageInput.value;
    
    if (messageText.trim()) {
        addMessage(messageText, "user");
        messageInput.value = '';
        
        // Simulate bot response
        setTimeout(() => {
            addMessage("Bot: " + messageText, "bot");
        }, 1000);
    }
});

function addMessage(text, sender) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    
    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}