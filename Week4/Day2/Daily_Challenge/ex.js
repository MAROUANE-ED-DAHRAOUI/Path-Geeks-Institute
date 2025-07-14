const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];

// 1. Create an array using forEach that contains all usernames with exclamation points
console.log("=== TASK 1: ALL USERNAMES WITH EXCLAMATION POINTS ===");
const usernames = [];
gameInfo.forEach(player => {
    usernames.push(player.username + "!");
});
console.log(usernames);

// 2. Create an array using forEach that contains usernames of players with score > 5
console.log("\n=== TASK 2: WINNERS (SCORE > 5) ===");
const winners = [];
gameInfo.forEach(player => {
    if (player.score > 5) {
        winners.push(player.username);
    }
});
console.log(winners);

// 3. Find and display the total score of all users
console.log("\n=== TASK 3: TOTAL SCORE ===");
let totalScore = 0;
gameInfo.forEach(player => {
    totalScore += player.score;
});
console.log(`Total score: ${totalScore}`);

// Additional demonstrations with different array methods
console.log("\n=== BONUS: ALTERNATIVE METHODS ===");

// Using map() for task 1
const usernamesMap = gameInfo.map(player => player.username + "!");
console.log("Using map():", usernamesMap);

// Using filter() + map() for task 2
const winnersFilter = gameInfo
    .filter(player => player.score > 5)
    .map(player => player.username);
console.log("Using filter() + map():", winnersFilter);

// Using reduce() for task 3
const totalScoreReduce = gameInfo.reduce((total, player) => total + player.score, 0);
console.log("Using reduce():", totalScoreReduce);

// Extra: Get all unique items from all players
console.log("\n=== EXTRA: ALL UNIQUE ITEMS ===");
const allItems = [];
gameInfo.forEach(player => {
    player.items.forEach(item => {
        if (!allItems.includes(item)) {
            allItems.push(item);
        }
    });
});
console.log("All unique items:", allItems);

// Alternative using flat() and Set
const uniqueItems = [...new Set(gameInfo.map(player => player.items).flat())];
console.log("Using flat() and Set:", uniqueItems);