// 1-> Create an array called colors where the value is a list of your five favorite colors.
const color = ["blue", "red", "green", "yellow", "purple"];

// 2->Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for(let i = 0; i < color.length; i++) {
    console.log("My #%d choice is %s", i + 1, color[i]);
}
