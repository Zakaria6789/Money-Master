/////// shared function \\\\\\\\\
function errorMasage(error1, error2, error3) {
    document.getElementById('over-expenses').style.display = error1;
    document.getElementById('string-massage').style.display = error2;
    document.getElementById('negative-number-massage').style.display = error3;
}

/////// (Total Expenses) And (Balance Part) with (Error Massage) \\\\\\\\ 
const income = document.getElementById('income');
const food = document.getElementById('food');
const rent = document.getElementById('rent');
const clothes = document.getElementById('clothes');
const totalExpenses = document.getElementById('total-expenses');
const balance = document.getElementById('balance');

document.getElementById('calculate').addEventListener('click', function () {
    const incomeAmount = income.value;
    const foodCost = food.value;
    const rentCost = rent.value;
    const clothesCost = clothes.value;
    const totalCost = parseInt(foodCost) + parseInt(rentCost) + parseInt(clothesCost);

    if (totalCost > income.value) {
        errorMasage('block', 'none', 'none');
    }
    else if (foodCost >= 0 && rentCost >= 0 && clothesCost >= 0 && incomeAmount >= 0) {

        /////// main code for click event \\\\\\\\
        totalExpenses.innerText = totalCost;
        balance.innerText = parseInt(income.value) - parseInt(totalExpenses.innerText);
        errorMasage('none', 'none', 'none');
    }
    else if (foodCost < 0 || rentCost < 0 || clothesCost < 0 || incomeAmount < 0) {
        errorMasage('none', 'none', 'block');
    }
    else {
        errorMasage('none', 'block', 'none');
    }
})

/////// (Saving Amount) And (Remaining Balance) with (Error Massage) \\\\\\\\
const savingAmount = document.getElementById('saving-amount');
const saveInput = document.getElementById('save-input');
const remaining = document.getElementById('remaining');

document.getElementById('save').addEventListener('click', function () {
    if (saveInput.value > 100) {
        document.getElementById('over-balance').style.display = 'block';
    }
    else if (saveInput.value >= 0) {

        /////// main code for click event \\\\\\\\
        savingAmount.innerText = (balance.innerText * saveInput.value) / 100;
        remaining.innerText = balance.innerText - savingAmount.innerText;
        document.getElementById('over-balance').style.display = 'none';
    }
    else {
        alert('Please insert a valid number !!!')
    }
})