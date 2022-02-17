// Total Expenses : 
const income = document.getElementById('income');
const food = document.getElementById('food');
const rent = document.getElementById('rent');
const clothes = document.getElementById('clothes');
const totalExpenses = document.getElementById('total-expenses');
const balance = document.getElementById('balance');

document.getElementById('calculate').addEventListener('click', function () {
    totalExpenses.innerText = parseInt(food.value) + parseInt(rent.value) + parseInt(clothes.value);
    balance.innerText = parseInt(income.value) - parseInt(totalExpenses.innerText);
})

// Money Saving:
const savingAmount = document.getElementById('saving-amount');
const saveInput = document.getElementById('save-input');
const remaining = document.getElementById('remaining');

document.getElementById('save').addEventListener('click', function () {
    savingAmount.innerText = (balance.innerText * saveInput.value) / 100;
    remaining.innerText = balance.innerText - savingAmount.innerText;
})