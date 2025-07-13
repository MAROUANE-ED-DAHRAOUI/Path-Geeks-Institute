function winBattle(){
    return true;
}

//Transform the winBattle() function to an arrow function.
const winBattle = () => true;

const experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints); 