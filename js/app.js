
function inputValue(item) {
    const fieldInput = document.getElementById(item + '-input');
    const incomeValue = parseInt(fieldInput.value)
    // err handle 
    if (incomeValue < 0) {
        // alert('Negative value not allowed')
        document.getElementById('alert').style.backgroundColor = 'red'
        document.getElementById('alert').style.width = "50%";
        document.getElementById('alert').style.color = "white"
        document.getElementById('alert').style.margin = "auto";
        document.getElementById('alert').innerText = "Negative value is not allowed !"
        document.getElementById("expenses-amount").style.display = 'none'
        document.getElementById("balance-amount").style.display = 'none'
    }
    
        return incomeValue
    
        

    
}


document.getElementById('calculate-btn').addEventListener('click', function () {
    // income input 
    
    inputValue('income')
    // expenses input 
    inputValue('food')
    // rent input 
    inputValue('rent')
    // clothes input 
    inputValue('clothes')
// Total Expenses
    const totalExpenses = inputValue('food') + inputValue('rent')+ inputValue('clothes');
    document.getElementById('expenses-amount').innerText = totalExpenses
    // Balance 
    document.getElementById('balance-amount').innerText = inputValue('income') - totalExpenses
})

// saving 
document.getElementById('saving-btn').addEventListener('click', function () {
    const balance = document.getElementById('balance-amount').innerText;
    const incomeInput = document.getElementById('income-input');
    const incomeValue = parseInt(incomeInput.value);
    const savingInput = document.getElementById('saving-input')
    const savingValue = savingInput.value;
    const saving = (incomeValue * savingValue) / 100
    

    // error handeling 
    if (saving > balance) {
        document.getElementById('saving-amount').innerText="Savings is higher than main Balance"
    } else {
        document.getElementById('saving-amount').innerText=saving
    }
    

//    error handeling 

    if (saving > balance) {
        let errMasg = document.getElementById('remain-amount')
        
        errMasg.innerText = "You do not have sufficient Balance"
        
        
    } else {
        remaining = balance - saving
        document.getElementById('remain-amount').innerText=remaining
    }

    
})
  