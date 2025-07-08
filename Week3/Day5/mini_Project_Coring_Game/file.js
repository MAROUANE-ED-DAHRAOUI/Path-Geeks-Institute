const grid = document.getElementById('grid');
const palette = document.getElementById('palette');
let currentColor = 'black';
let mouseDown = false;

// Create 63x24 grid
for (let i = 0; i < 63 * 24; i++) {
  const square = document.createElement('div');
  square.className = 'square';
  grid.appendChild(square);

  // Draw on click or drag
  square.addEventListener('mousedown', function() {
    square.style.background = currentColor;
    mouseDown = true;
  });
  square.addEventListener('mouseover', function() {
    if (mouseDown) {
      square.style.background = currentColor;
    }
  });
  square.addEventListener('mouseup', function() {
    mouseDown = false;
  });
}

// Listen for mouseup on the whole window (so drawing stops if mouse leaves grid)
window.addEventListener('mouseup', function() {
  mouseDown = false;
});

// Color palette selection
palette.addEventListener('click', function(e) {
  if (e.target.classList.contains('color')) {
    currentColor = e.target.getAttribute('data-color');
  }
});
