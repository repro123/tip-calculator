/*
"use strict";

const resetButton = document.getElementById("reset");
const form = document.getElementById("myForm");
const tipPerPerson = document.getElementById("tipPerPerson");
const totalPerPerson = document.getElementById("totalPerPerson");
const customRadio = document.getElementById("customRadio");
const customNumberInput = document.getElementById("customNumberInput");
const billErrorMessage = document.getElementById("billErrorMessage");
const peopleErrorMessage = document.getElementById("peopleErrorMessage");
const bill = form.bill;
const numberofpeople = form.numberofpeople;
const tipPercentage = form.tip;

tipPerPerson.textContent = "0.00";
totalPerPerson.textContent = "0.00";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let billValue = Number(bill.value);
  let peopleValue = Number(numberofpeople.value);
  let tipValue = Number(tipPercentage.value);
  console.log(billValue, peopleValue, tipValue);

  if (isNaN(billValue)) {
    billErrorMessage.textContent = "select a valid number";
  } else if (billValue < 0) {
    billErrorMessage.textContent = "Can't be negative";
  } else if (billValue === 0) {
    billErrorMessage.textContent = "Can't be zero";
  }

  if (isNaN(peopleValue)) {
    peopleErrorMessage.textContent = "select a valid number";
  } else if (peopleValue < 0) {
    peopleErrorMessage.textContent = "Can't be negative";
  } else if (peopleValue === 0) {
    peopleErrorMessage.textContent = "Can't be zero";
  }

  if (
    !isNaN(billValue) &&
    billValue > 0 &&
    !isNaN(peopleValue) &&
    peopleValue > 0
  ) {
    billErrorMessage.textContent = "";
    peopleErrorMessage.textContent = "";
    let CalculatedTipPerPerson = (billValue * (tipValue / 100)) / peopleValue;
    let CalculatedTotalPerPerson = billValue / peopleValue + tipPerPerson;
    console.log(tipPerPerson, totalPerPerson);
    CalculatedTipPerPerson.textContent = tipPerPerson.toFixed(2);
    CalculatedTotalPerPerson.textContent = totalPerPerson.toFixed(2);
  }
});

// focus the customNumberInput field when the customRadio is selected/checked so users can type in it directly
customRadio.addEventListener("change", () => {
  customNumberInput.focus();
});

// reset button should reset the form and the tipPerPerson and totalPerPerson values
resetButton.addEventListener("click", () => {
  form.reset();
  tipPerPerson.textContent = "0.00";
  totalPerPerson.textContent = "0.00";
});
*/
