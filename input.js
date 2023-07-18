function submitQuery() {
    const city1 = document.getElementById('city1').value;
    const city2 = document.getElementById('city2').value;
    const query = document.getElementById('query').value;
    const weight = document.getElementById('weight').value;

    // Convert city names to integers or perform any necessary processing

    switch (query) {
        case 'add':
            addEdge(city1, city2, weight);
            break;
        case 'remove':
            removeEdge(city1, city2);
            break;
        case 'distance':
            findDistance(city1, city2);
            break;
        default:
            console.log('Invalid query');
    }
}

function addEdge(city1, city2, weight) {
    if (checkEdge(city1, city2, weight)) {
        displayMessage(`Edge (${city1} - ${city2}) with weight ${weight} has been added.`, 'success');
    } else {
        displayMessage(`Cannot add edge (${city1} - ${city2}).`, 'error');
    }
}

function checkEdge(city1, city2, weight) {
    // Implement logic to check if the edge can be added
    // Return true if the edge can be added, false otherwise
    return true; // Dummy implementation, always returns true
}

function removeEdge(city1, city2) {
    if (checkEdgeRemove(city1, city2, weight)) {
        displayMessage(`Edge (${city1} - ${city2}) has been removed.`, 'success');
        
        // Remove the message after 3 seconds (adjust the duration as needed)
        // setTimeout(function() {
        //     removeMessage();
        // }, 3000);
    } else {
        displayMessage(`Cannot remove edge (${city1} - ${city2}).`, 'error');
    }
}

function removeMessage() {
    const messageContainer = document.getElementById('messageContainer');
    const messageDiv = messageContainer.querySelector('.message');
    
    if (messageDiv) {
        messageContainer.removeChild(messageDiv);
    }
}

function checkEdgeRemove(city1, city2, weight) {
    // Implement logic to check if the edge can be added
    // Return true if the edge can be added, false otherwise
    return false; // Dummy implementation, always returns true
}

function findDistance(city1, city2) {
    // Implement logic to handle 'Find Distance' query
}

function displayMessage(message, messageType) {
    const messageContainer = document.getElementById('messageContainer');

    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(messageType);

    const messageText = document.createElement('span');
    messageText.textContent = message;
    messageDiv.appendChild(messageText);

    const closeButton = document.createElement('span');
    closeButton.classList.add('closeButton');
    closeButton.textContent = '×';
    closeButton.addEventListener('click', function() {
        messageContainer.removeChild(messageDiv);
    });
    messageDiv.appendChild(closeButton);

    messageContainer.insertBefore(messageDiv, messageContainer.firstChild);
}
