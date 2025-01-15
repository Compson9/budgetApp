const transactionEl = document.querySelector(".transactions");
const balanceNumberEl = document.querySelector(".balance-number");
const numberIncomeEl = document.querySelector(".number--income");
const numberExpensesEl = document.querySelector(".number--expenses");
const formEl = document.querySelector(".form");
const inputDescriptionEl = document.querySelector(".input--description");
const inputAmountEl = document.querySelector(".input--amount");


// submit form
formEl.addEventListener("submit", function(e){
    // Prevent default browser behavior
    e.preventDefault();
    const description = inputDescriptionEl.value
    const amount = +inputAmountEl.value

    // create new transaction Html
    const transactionItemHTML = `
    <li class="transaction transaction--${amount > 0 ? "income": "expense"}">
          <span class="transaction__text">${description}</span>
          <span class="transaction__amount">${amount > 0 ? "+": ""}${amount}</span>
          <button class="transaction__btn">X</button>
        </li>
    `
    // insert Html
    transactionEl.insertAdjacentHTML("beforeend", transactionItemHTML)

    // clear input fields
    inputDescriptionEl.value="";
    inputAmountEl.value="";

    // unfocus input
    inputDescriptionEl.blur();
    inputAmountEl.blur();


    // update income and expenses
    if(amount > 0) {
        const currentIncome = +numberIncomeEl.textContent
        const updateIncome = currentIncome + amount;
        numberIncomeEl.textContent = updateIncome;
      
      } else {
        const currentExpenses = numberExpensesEl.textContent;
        const updateExpenses = currentExpenses - amount * -1;
        numberExpensesEl.textContent = updateExpenses;
      }


    //   update Balance
const income = +numberIncomeEl.textContent;
const expenses = +numberExpensesEl.textContent;
const updateBalance = income - expenses
balanceNumberEl.textContent = updateBalance

// check if balance is negative 
if(updateBalance <= 0){
    balanceNumberEl.style.color = "red"
}


})


transactionEl.addEventListener("click", function removeItem(e) {
  // remove transaction
  e.preventDefault();
  const clickedEl = e.target.parentNode;
  clickedEl.remove();

  const amountEl = clickedEl.querySelector(".transaction__amount");
  const amount = +amountEl.textContent

//   Update income and expenses

  if(amount > 0) {
    const currentIncome = +numberIncomeEl.textContent
    const updateIncome = currentIncome + amount;
    numberIncomeEl.textContent = updateIncome;
  
  } else {
    const currentExpenses = numberExpensesEl.textContent;
    const updateExpenses = currentExpenses + amount * -1;
    numberExpensesEl.textContent = updateExpenses;
  }

//   update Balance
const income = +numberIncomeEl.textContent;
const expenses = +numberExpensesEl.textContent;
const updateBalance = income - expenses
balanceNumberEl.textContent = updateBalance

// check if balance is negative 
if(updateBalance <= 0){
    balanceNumberEl.style.color = "red"
}
});
