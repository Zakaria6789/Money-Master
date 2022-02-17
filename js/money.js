// Total Expenses : 
const income = document.getElementById('income');
const food = document.getElementById('food');
const rent = document.getElementById('rent');
const clothes = document.getElementById('clothes');
const totalExpenses = document.getElementById('total-expenses');
const balance = document.getElementById('balance');

// input-value:


document.getElementById('calculate').addEventListener('click', function () {
    const incomeAmount = income.value;
    const foodCost = food.value;
    const rentCost = rent.value;
    const clothesCost = clothes.value;
    const totalCost = parseInt(foodCost) + parseInt(rentCost) + parseInt(clothesCost);

    if (totalCost > income.value) {
        document.getElementById('over-expenses').style.display = 'block';
        document.getElementById('string-massage').style.display = 'none';
        document.getElementById('negative-number-massage').style.display = 'none';
    }
    else if (foodCost >= 0 && rentCost >= 0 && clothesCost >= 0 && incomeAmount >= 0) {
        totalExpenses.innerText = totalCost;
        balance.innerText = parseInt(income.value) - parseInt(totalExpenses.innerText);
        document.getElementById('over-expenses').style.display = 'none';
        document.getElementById('negative-number-massage').style.display = 'none';
        document.getElementById('string-massage').style.display = 'none';
    }

    else if (foodCost < 0 || rentCost < 0 || clothesCost < 0 || incomeAmount < 0) {
        document.getElementById('negative-number-massage').style.display = 'block';
        document.getElementById('string-massage').style.display = 'none';
        document.getElementById('over-expenses').style.display = 'none';
    }
    else {
        document.getElementById('string-massage').style.display = 'block';
        document.getElementById('negative-number-massage').style.display = 'none';
        document.getElementById('over-expenses').style.display = 'none';
    }

})

// Money Saving:
const savingAmount = document.getElementById('saving-amount');
const saveInput = document.getElementById('save-input');
const remaining = document.getElementById('remaining');

document.getElementById('save').addEventListener('click', function () {
    if (saveInput.value > 100) {
        document.getElementById('over-balance').style.display = 'block';

    }
    else if (saveInput.value >= 0) {
        savingAmount.innerText = (balance.innerText * saveInput.value) / 100;
        remaining.innerText = balance.innerText - savingAmount.innerText;
        document.getElementById('over-balance').style.display = 'none';
    }
})