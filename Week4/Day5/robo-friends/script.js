const robots = [
  { id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz', image: 'https://robohash.org/1?200x200' },
  { id: 2, name: 'Ervin Howell', email: 'Shanna@melissa.tv', image: 'https://robohash.org/2?200x200' },
  { id: 3, name: 'Clementine Bauch', email: 'Nathan@yesenia.net', image: 'https://robohash.org/3?200x200' },
  { id: 4, name: 'Patricia Lebsack', email: 'Julianne.OConner@kory.org', image: 'https://robohash.org/4?200x200' },
  { id: 5, name: 'Chelsey Dietrich', email: 'Lucio_Hettinger@annie.ca', image: 'https://robohash.org/5?200x200' },
  { id: 6, name: 'Mrs. Dennis Schulist', email: 'Karley_Dach@jasper.info', image: 'https://robohash.org/6?200x200' },
  { id: 7, name: 'Kurtis Weissnat', email: 'Telly.Hoeger@billy.biz', image: 'https://robohash.org/7?200x200' },
  { id: 8, name: 'Nicholas Runolfsdottir V', email: 'Sherwood@rosamond.me', image: 'https://robohash.org/8?200x200' },
  { id: 9, name: 'Glenna Reichert', email: 'Chaim_McDermott@dana.io', image: 'https://robohash.org/9?200x200' },
  { id: 10, name: 'Clementina DuBuque', email: 'Rey.Padberg@karina.biz', image: 'https://robohash.org/10?200x200' }
];

const container = document.getElementById('robot-container');
const searchInput = document.getElementById('search');

// Debounce function
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Render robots
function displayRobots(robotsList) {
  container.innerHTML = ''; // Clear
  
  // Add loading state
  if (robotsList.length === 0) {
    container.innerHTML = '<p class="no-results">No robots found matching your search.</p>';
    return;
  }
  
  robotsList.forEach(({ name, email, image }) => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <img src="${image}" alt="${name}" />
      <h3>${name}</h3>
      <p>${email}</p>
    `;

    container.appendChild(card);
  });
}

// Search function
function performSearch() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  
  // If search is empty, show all robots
  if (searchTerm === '') {
    displayRobots(robots);
    return;
  }
  
  // Filter robots based on search term
  const filtered = robots.filter(robot =>
    robot.name.toLowerCase().includes(searchTerm) ||
    robot.email.toLowerCase().includes(searchTerm)
  );
  
  displayRobots(filtered);
}

// Create debounced search function (300ms delay)
const debouncedSearch = debounce(performSearch, 300);

// Add event listener with debounced search
searchInput.addEventListener('input', debouncedSearch);

// Initial render
displayRobots(robots);

// Optional: Add visual feedback for searching
searchInput.addEventListener('input', function() {
  // Show immediate feedback that search is being processed
  if (this.value.length > 0) {
    this.style.borderColor = '#007bff';
  } else {
    this.style.borderColor = '#ccc';
  }
});
