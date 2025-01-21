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

// Function to generate an OG image (use a canvas API or server-side for a real image)
document.getElementById('downloadBtn').addEventListener('click', function () {
    const preview = document.getElementById('preview');

    // Create a canvas to draw the image
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 630;
    const ctx = canvas.getContext('2d');

    // Draw the background color
    ctx.fillStyle = preview.style.backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the title and description
    const title = document.getElementById('ogTitle').innerText;
    const description = document.getElementById('ogDescription').innerText;
    const fontColor = preview.style.color;

    ctx.fillStyle = fontColor;
    ctx.font = '50px Arial';
    ctx.fillText(title, 150, 200);

    ctx.font = '30px Arial';
    ctx.fillText(description, 150, 300);

    // Convert canvas to image and trigger download
    const imageUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'og-image.png';
    link.click();
});
