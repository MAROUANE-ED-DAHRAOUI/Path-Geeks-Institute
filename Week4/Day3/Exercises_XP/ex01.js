const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// The output will be:
// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// Explanation:

// The code uses object and array destructuring to extract values from person.
// It then prints those values in a formatted string.
