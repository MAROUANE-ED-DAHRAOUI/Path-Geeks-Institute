function calculateTip() {
    // Get input values
    const billAmount = document.getElementById('billAmt').value;
    const serviceQuality = document.getElementById('serviceQual').value;
    let numberOfPeople = document.getElementById('numOfPeople').value;

    // Validate bill amount and service quality
    if (billAmount === "" || serviceQuality == 0) {
        alert("Please enter the bill amount and select service quality.");
        return;
    }

    // Validate number of people
    if (numberOfPeople === "" || numberOfPeople < 1) {
        numberOfPeople = 1;
        document.getElementById('each').style.display = "none";
    } else {
        document.getElementById('each').style.display = "inline";
    }

    // Calculate tip
    const total = ((billAmount * serviceQuality) / numberOfPeople).toFixed(2);

    // Show the tip
    document.getElementById('totalTip').style.display = "block";
    document.getElementById('tip').textContent = total;
}

// Hide the tip amount on page load
window.onload = function() 
{
    document.getElementById('totalTip').style.display = "none";
}

// Call calculateTip() when the calculate button is clicked
document.getElementById('calculate').onclick = calculateTip;