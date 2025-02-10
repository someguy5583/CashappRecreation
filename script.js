let balance = 0.00;
const f = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
    notation: "compact",
    minimumFractionDigits: 2,  // Ensure no decimals for compact numbers
    maximumFractionDigits: 2   // Allow up to 2 decimals when necessary
});



function updateDisplay() {
    let cashBalanceElement = document.getElementById("cashBalance");
    cashBalanceElement.textContent = f.format(balance); // Pass number directly

    // Change color if balance is negative
    cashBalanceElement.style.color = balance < 0 ? "#ff0000" : "black";
}

function addCash() {
    document.getElementById("depositPopup").style.display = "flex";
}

function withdraw() {
    document.getElementById("withdrawPopup").style.display = "flex";
}


function closePopup() {
    document.getElementById("depositPopup").style.display = "none";
    document.getElementById("withdrawPopup").style.display = "none";
}

function submitDeposit() {
    let amountInput = document.getElementById("amount");
    let amount = parseFloat(amountInput.value);

    if (!isNaN(amount) && amount > 0) {
        balance += amount; // Update balance
        updateDisplay(); // Refresh the displayed balance
        amountInput.value = ""; // Clear input field
        closePopup(); // Close the popup
    } else {
        alert("Please enter a valid amount");
    }
}

function submitWithdraw() {
    let amountInput = document.getElementById("withdrawAmount");
    let amount = parseFloat(amountInput.value);

    if (!isNaN(amount) && amount > 0) {
        balance -= amount; // Update balance
        updateDisplay(); // Refresh the displayed balance
        amountInput.value = ""; // Clear input field
        closePopup(); // Close the popup
    } else {
        alert("Please enter a valid amount");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let homeLink = document.querySelector(".linkToHome");

    if (homeLink) {
        homeLink.addEventListener("click", function (event) {
            event.preventDefault();  // Prevent default behavior
            window.location.href = "index.html";  // Force navigation
        });
    }
});
