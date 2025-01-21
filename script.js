// Get references to input fields and the result display
const pxInput = document.getElementById('pxInput');
const rootFontSizeInput = document.getElementById('rootFontSize');
const remResult = document.getElementById('remResult');

// Function to convert px to rem
function convertPxToRem() {
  const pxValue = parseFloat(pxInput.value) || 0; // Default to 0 if empty
  const rootFontSize = parseFloat(rootFontSizeInput.value) || 16; // Default root font size to 16px
  const remValue = (pxValue / rootFontSize).toFixed(4); // Calculate rem and round to 4 decimals
  remResult.textContent = `${remValue} rem`; // Update the result display
}

// Add event listeners for real-time conversion
pxInput.addEventListener('input', convertPxToRem);
rootFontSizeInput.addEventListener('input', convertPxToRem);


// script.js

document.getElementById('ogForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get user inputs
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const bgColor = document.getElementById('bgColor').value;
    const fontColor = document.getElementById('fontColor').value;

    // Set preview values
    document.getElementById('ogTitle').innerText = title || 'Your Title';
    document.getElementById('ogDescription').innerText = description || 'Your description here.';

    const preview = document.getElementById('preview');
    preview.style.backgroundColor = bgColor;
    preview.style.color = fontColor;

    // Show download button
    document.getElementById('downloadBtn').style.display = 'block';
});

