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





// script.js

document.getElementById('ogForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get user inputs
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const bgColor = document.getElementById('bgColor').value;
    const fontColor = document.getElementById('fontColor').value;
    const bgImageFile = document.getElementById('bgImage').files[0]; // Get the background image file

    // Set preview values
    document.getElementById('ogTitle').innerText = title || 'Your Title';
    document.getElementById('ogDescription').innerText = description || 'Your description here.';

    const preview = document.getElementById('preview');
    preview.style.backgroundColor = bgColor;
    preview.style.color = fontColor;

    // If a background image is uploaded, show it
    if (bgImageFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.style.backgroundImage = `url(${e.target.result})`;
            preview.style.backgroundSize = 'cover';
            preview.style.backgroundPosition = 'center';
        };
        reader.readAsDataURL(bgImageFile);
    } else {
        preview.style.backgroundImage = ''; // Reset if no image uploaded
    }

    // Show the download button
    document.getElementById('downloadBtn').style.display = 'block';
});

// Function to generate an OG image (with background image support)
document.getElementById('downloadBtn').addEventListener('click', function () {
    const preview = document.getElementById('preview');
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 630;
    const ctx = canvas.getContext('2d');

    // Background image handling
    const bgImage = preview.style.backgroundImage.slice(4, -1).replace(/"/g, '');
    if (bgImage) {
        const image = new Image();
        image.onload = function () {
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            drawText(ctx, preview);
        };
        image.src = bgImage;
    } else {
        ctx.fillStyle = preview.style.backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawText(ctx, preview);
    }
});

// Draw text on the canvas
function drawText(ctx, preview) {
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
}




