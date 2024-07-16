// Create the floating button
const button = document.createElement('div');
button.style.position = 'fixed';
button.style.bottom = '20px';
button.style.right = '20px';
button.style.backgroundColor = '#007bff';
button.style.color = 'white';
button.style.border = 'none';
button.style.borderRadius = '50%';
button.style.width = '50px';
button.style.height = '50px';
button.style.display = 'flex';
button.style.alignItems = 'center';
button.style.justifyContent = 'center';
button.style.fontSize = '20px';
button.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
button.style.cursor = 'pointer';
button.style.zIndex = '1000';
button.innerHTML = '&#x1F4DD;'; // Pencil emoji or any icon

// Add click event
button.addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: "openNewTab" });
});

// Append button to the body
document.body.appendChild(button);
