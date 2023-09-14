const chatMessages = document.getElementById('chat-messages');
        const userInput = document.getElementById('user-input');

        userInput.addEventListener('keydown', function (event) {
            if (event.key === 'Enter' && userInput.value.trim() !== '') {
                const userQuestion = userInput.value.trim();
                appendMessage('Tú', userQuestion);
                userInput.value = '';

                // Genera una respuesta a la pregunta
                const response = generateResponse(userQuestion);
                appendMessage('ChatBot', response);
            }
        });

        function appendMessage(sender, message) {
            const messageElement = document.createElement('div');
            messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
            chatMessages.appendChild(messageElement);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function generateResponse(userQuestion) {
            // Diccionario de preguntas y respuestas
            const qaDictionary = {
                'hola': 'Buenas tardes, ¿Cómo puedo ayudarte?',
                '¿Quién es Pitágoras?': 'Pitágoras fue un filósofo y matemático griego considerado el primer matemático puro. Contribuyó de manera significativa en el avance de la matemática helénica, la geometría y la aritmética',
                '¿Cuándo nació Pitágoras?': 'Nació en torno al 570 aC. en Samos.',
                '¿Cuáles fueron los descubrimientos más importantes de Pitágoras?': 'Sus descubrimientos más importantes fueron las tablas de multiplicar, la existencia de los números racionales, el teorema de Pitágoras, los intervalos entre las notas musicales, monocordio, entre otros.',
            };

            // Busca la respuesta en el diccionario
            const response = qaDictionary[userQuestion] || 'Lo siento, no entiendo esa pregunta.';

            return response;
        }