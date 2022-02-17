// Total Expenses : 
const income = document.getElementById('income');
const food = document.getElementById('food');
const rent = document.getElementById('rent');
const clothes = document.getElementById('clothes');
const totalExpenses = document.getElementById('total-expenses');
const balance = document.getElementById('balance');

// input-value:


document.getElementById('calculate').addEventListener('click', function () {
    const foodCost = food.value;
    const rentCost = rent.value;
    const clothesCost = clothes.value;

    if (foodCost >= 0 && rentCost >= 0 && clothesCost >= 0) {
        totalExpenses.innerText = parseInt(foodCost) + parseInt(rentCost) + parseInt(clothesCost);
        balance.innerText = parseInt(income.value) - parseInt(totalExpenses.innerText);
    }
    else if (foodCost < 0 || rentCost < 0 || clothesCost < 0) {
        document.getElementById('negative-number-massage').style.display = 'block';
        document.getElementById('string-massage').style.display = 'none';
    }
    else {
        document.getElementById('string-massage').style.display = 'block';
        document.getElementById('negative-number-massage').style.display = 'none';
    }

})

// Money Saving:
const savingAmount = document.getElementById('saving-amount');
const saveInput = document.getElementById('save-input');
const remaining = document.getElementById('remaining');

document.getElementById('save').addEventListener('click', function () {
    savingAmount.innerText = (balance.innerText * saveInput.value) / 100;
    remaining.innerText = balance.innerText - savingAmount.innerText;
})