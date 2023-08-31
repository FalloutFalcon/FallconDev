document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    //const sidebar = document.getElementById(".sidebar"); 
    
    darkModeToggle.addEventListener("change", function () {
        document.body.classList.toggle("dark-mode");
        //sidebar.classList.toggle("dark-mode");
    });

    sendButton.addEventListener("click", function () {
        const message = messageInput.value;
        if (message.trim() !== "") {
            chatBox.innerHTML += `<p>You: ${message}</p>`;
            messageInput.value = "";
        }
    });

    // You can add more functionality to handle receiving messages here.
});