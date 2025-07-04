function findAvg(gradesList)
{
    let sum = 0;
    let avg = 0;
    for (let i = 0; i < gradesList.length; i++) {
        sum += gradesList[i];
    }
    avg = sum / gradesList.length;
    if (avg >= 65) {
        console.log("You passed!");
        return true;
    }
    else {
        console.log("You failed and must repeat the course.");
        return false;
    }
}

const grades = [80, 90, 70, 60, 50];
const result = findAvg(grades);