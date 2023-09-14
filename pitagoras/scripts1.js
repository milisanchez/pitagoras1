// En script.js
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
    const userMessage = userInput.value;
    if (userMessage.trim() !== '') {
        appendMessage('Tú', userMessage);
        userInput.value = '';
        // Aquí puedes agregar lógica adicional para responder al mensaje del usuario.
    }
});

function appendMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatMessages.appendChild(messageDiv);
}
