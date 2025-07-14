const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// 1. Using map() method to create welcome messages
console.log("=== WELCOME MESSAGES ===");
const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeStudents);

// 2. Using filter() method to get only Full Stack Residents
console.log("\n=== FULL STACK RESIDENTS ===");
const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');
console.log(fullStackResidents);

// Display names of Full Stack Residents only
console.log("\n=== FULL STACK RESIDENTS NAMES ===");
const fullStackNames = fullStackResidents.map(user => `${user.firstName} ${user.lastName}`);
console.log(fullStackNames);

// Alternative: Chain filter and map in one line
console.log("\n=== CHAINED METHODS ===");
const fullStackWelcome = users
    .filter(user => user.role === 'Full Stack Resident')
    .map(user => `Hello ${user.firstName}`);
console.log(fullStackWelcome);