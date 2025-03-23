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

// focus on custom input when custom radio is checked
customRadio.addEventListener("change", () => {
  customNumberInput.focus();
});

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
    errorCleared(billDiv, billErrorMessage, "");
  }

  //   validate custom input
  if (Number(customNumberInput.value) < 0) {
    handleError(customTipDiv, customInputErrorMessage, "Can't be negative");
    isValid = false;
  } else {
    errorCleared(customTipDiv, customInputErrorMessage, "");
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
    errorCleared(peopleDiv, peopleErrorMessage, "");
  }

  return isValid;
}

// function to handle error
function handleError(element, errorMessageElement, message) {
  element.classList.remove("border-transparent");
  element.classList.remove("focus-within:border-primaryStrongCyan");
  element.classList.add("border-red-500");

  errorMessageElement.textContent = message;
}

// function to clear error
function errorCleared(element, errorMessageElement, message) {
  element.classList.add("border-transparent");
  element.classList.add("focus-within:border-primaryStrongCyan");
  element.classList.remove("border-red-500");

  errorMessageElement.textContent = message;
}
// console.log(!validateInputs());

// function to calculate tip
function calcuateTip() {
  if (validateInputs()) {
    const billValue = Number(billInput.value);

    let tipValue;
    //    get the value of the checked radio input
    for (let tipRadioInput of tipRadioInputs) {
      if (tipRadioInput.checked) {
        if (tipRadioInput.id === "customRadio") {
          tipValue = Number(customNumberInput.value);
        } else {
          tipValue = Number(tipRadioInput.value);
          customNumberInput.value = "";
          customTipDiv.classList.remove("border-red-500");
        }
      }
    }

    const numberOfPeople = Number(numberOfPeopleInput.value);

    // calculate tip per person and total per person
    const totalTip = billValue * (tipValue / 100);
    const tipPerPerson = totalTip / numberOfPeople;
    const totalPerPerson = (billValue + totalTip) / numberOfPeople;

    // display the result
    tipPerPersonSpan.textContent = tipPerPerson.toFixed(2);
    totalPerPersonSpan.textContent = totalPerPerson.toFixed(2);
  }

  return;
}

// add event listeners
billInput.addEventListener("input", calcuateTip);
customNumberInput.addEventListener("input", calcuateTip);
numberOfPeopleInput.addEventListener("input", calcuateTip);

// reset button
resetButton.addEventListener("click", () => {
  form.reset();
  tipPerPersonSpan.textContent = "0.00";
  totalPerPersonSpan.textContent = "0.00";
  errorCleared(billDiv, billErrorMessage, "");
  errorCleared(customTipDiv, customInputErrorMessage, "");
  errorCleared(peopleDiv, peopleErrorMessage, "");
});
