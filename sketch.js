// Get the canvas and set up the drawing context
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Set canvas dimensions
canvas.width = 800;
canvas.height = 600;

// Draw a background for the game
ctx.fillStyle = "#c8f0c8"; // light green for a healthy gut!
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Simple game elements
ctx.fillStyle = "blue";
ctx.fillRect(50, 50, 100, 100); // A "probiotic" hero

ctx.fillStyle = "red";
ctx.fillRect(200, 200, 50, 50); // "Unhealthy food" enemy

// Add a message
ctx.fillStyle = "black";
ctx.font = "20px Arial";
ctx.fillText("Collect probiotics, avoid junk food!", 250, 30);
