// 1. Create an array of planets in the solar system
const planets = [
    { name: "Mercury", color: "gray", moons: 0 },
    { name: "Venus", color: "orange", moons: 0 },
    { name: "Earth", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "brown", moons: 79 },
    { name: "Saturn", color: "yellow", moons: 82 },
    { name: "Uranus", color: "lightblue", moons: 27 },
    { name: "Neptune", color: "darkblue", moons: 14 }
];

// 2. Get the section where planets will be placed
const planetContainer = document.querySelector('.listPlanets');

// 3. Loop through each planet and create its element
planets.forEach(planet => {
    // Create planet div
    const planetDiv = document.createElement('div');
    planetDiv.className = 'planet';
    planetDiv.style.backgroundColor = planet.color;
    
    // Add planet name
    const planetName = document.createElement('span');
    planetName.textContent = planet.name;
    planetName.style.color = 'white'; // Make text visible on dark backgrounds
    planetDiv.appendChild(planetName);
    
    // Create moons for this planet
    for (let i = 0; i < planet.moons; i++) {
        const moon = document.createElement('div');
        moon.className = 'moon';
        
        // Position moons randomly around the planet
        const angle = (i / planet.moons) * Math.PI * 2;
        const distance = 70; // Distance from planet center
        moon.style.left = `${50 + Math.cos(angle) * distance}px`;
        moon.style.top = `${50 + Math.sin(angle) * distance}px`;
        
        planetDiv.appendChild(moon);
    }
    
    // Add planet to the container
    planetContainer.appendChild(planetDiv);
});