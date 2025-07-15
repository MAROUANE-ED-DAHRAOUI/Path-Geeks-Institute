const users = { user1: 18273, user2: 92833, user3: 90315 };

// Part 1: Turn the users object into an array
const usersArray = Object.entries(users);
console.log(usersArray);

// Part 2: Multiply each user's ID by 2
const updatedUsersArray = usersArray.map(([key, value]) => [key, value * 2]);
console.log(updatedUsersArray);
