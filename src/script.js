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

"use strict";

const form = document.getElementById("myForm");

// select all input elements
const billInput = document.getElementById("bill");
const tipRadioInputs = document.getElementsByName("tip");
const customRadioInput = document.getElementById("customRadio");
const customNumberInput = document.getElementById("customNumberInput");
const numberOfPeopleInput = document.getElementById("numberofpeople");

// select error messages
const billErrorMessage = document.getElementById("billErrorMessage");
const customInputErrorMessage = document.getElementById(
  "customInputErrorMessage"
);
const peopleErrorMessage = document.getElementById("peopleErrorMessage");

// select the divs of bill, customDiv and people inputs
const billDiv = document.getElementById("billDiv");
const peopleDiv = document.getElementById("peopleDiv");
const customTipDiv = document.getElementById("customTipDiv");

// select tip per person and total per person spans
const tipPerPersonSpan = document.getElementById("tipPerPerson");
const totalPerPersonSpan = document.getElementById("totalPerPerson");

// select error button
const resetButton = document.getElementById("reset");

// function to validate inputes
function validateInputs() {
  let isValid = true;

  // validate bill input
  if (!billInput.value) {
    handleError(billDiv, billErrorMessage, "Select a number");
    isValid = false;
  } else if (Number(billInput.value) < 0) {
    handleError(billDiv, billErrorMessage, "Can't be negative");
    isValid = false;
  } else if (Number(billInput.value) === 0) {
    handleError(billDiv, billErrorMessage, "Can't be zero");
    isValid = false;
  } else {
    billErrorMessage.textContent = "";
    noErrorBorder(billDiv);
  }

  //   validate custom input
  if (Number(customNumberInput.value) < 0) {
    customInputErrorMessage.textContent = "Can't be negative";
    customTipDiv.classList.add("border-red-500");
    isValid = false;
  } else {
    customInputErrorMessage.textContent = "";
    customTipDiv.classList.remove("border-red-500");
  }

  //   validate people input
  if (!numberOfPeopleInput.value) {
    handleError(peopleDiv, peopleErrorMessage, "Select a number");
    isValid = false;
  } else if (Number(numberOfPeopleInput.value) < 0) {
    handleError(peopleDiv, peopleErrorMessage, "Can't be negative");
    isValid = false;
  } else if (Number(numberOfPeopleInput.value) === 0) {
    handleError(peopleDiv, peopleErrorMessage, "Can't be zero");
    isValid = false;
  } else {
    peopleErrorMessage.textContent = "";
    noErrorBorder(peopleDiv);
  }

  return isValid;
}

function handleError(element, errorMessageElement, message) {
  element.classList.remove("border-transparent");
  element.classList.remove("focus-within:border-primaryStrongCyan");
  element.classList.add("border-red-500");

  errorMessageElement.textContent = message;
}

function noErrorBorder(element) {
  element.classList.add("border-transparent");
  element.classList.add("focus-within:border-primaryStrongCyan");
  element.classList.remove("border-red-500");
}

billInput.addEventListener("input", validateInputs);
customNumberInput.addEventListener("input", validateInputs);
numberOfPeopleInput.addEventListener("input", validateInputs);
