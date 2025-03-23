# Frontend Mentor - Tip calculator app solution

This is my solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX).

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot 📸

![](./desktop-preview.jpg)

### Links

- View my solution on frontend mentor [here](https://www.frontendmentor.io/solutions/tip-calculator-0VCVX05Gnx)
- Live Site URL: [https://repro123.github.io/tip-calculator/](https://repro123.github.io/tip-calculator/)

## My process

### Built with 🛠

- Semantic HTML5 markup
- Tailwind CSS
- Mobile-first workflow

### New things I learnt 💡

- This is my first challenge that involves form validation, so naturally, i had a lot of disfficulties doing this.

- I hid the radio inputs visually using an `sr-only` class, so as to be able to style the labels. Depending on whethr or not the radio is checked, the label will be styled accordingly

- as for the 6th radio button, it was harder to create because the UI implies that the radio button will be visible initially. When it is checked, a number input will appear for the user to type their desired percentage value in the input field.

- I achieved the above by putting the `label > radio input` + `label > number input` in a div, with the number input hidden initially. Once the radio input is checked, it will become hidden and the number input will be shown. I used the `peer-` tailwind css selector. Also, once the radio input is clicked, focus should go to the number input. This was achieved with this javascript code

```js
customRadio.addEventListener("change", () => {
  customNumberInput.focus();
});
```

- I used the `form.reset()` to reset all the whole form when the reset button is clicked

### Current problems/bug 🐞

- Currently, the input for the number of people is accepting decimal inputs which is not meant to be so.

- Also when a negative value is typed into the custom input, there should be a visual error notification by the border turning red but this does not happen. It happens when focus is outside the error input

### Continued development

- I will futher practice working on challenges that involve form validation so as to solidify my knowledge in it

### Useful resources

- [JavaScript form validation by freeCodeCamp](https://www.freecodecamp.org/news/form-validation-in-javascript/) helped me a lot as I learnt several things there
- [MDN form validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation) also helped me to gain new insights

## Author

- Frontend Mentor - [@repro123](https://www.frontendmentor.io/profile/repro123)
- Twitter - [@Dr_Repro](https://www.twitter.com/Dr_Repro)
