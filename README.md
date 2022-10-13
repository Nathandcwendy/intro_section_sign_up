# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![Screenshot Preview](./images/screenshot.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/simple-sign-up-form-HAE2ddYYBV](https://www.frontendmentor.io/solutions/simple-sign-up-form-HAE2ddYYBV)
- Live Site URL: [https://signup-nate.netlify.app/](https://signup-nate.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla JS
- Animate.css

### What I learned

I used this project to get a good understanding of form validation. I had to make a lot of research and even finished the [Clientside Form Validation Guide On MDN](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation).

I learnt of built-in form validation methods such as `min-length`, `pattern`, `required` forHTML, along with css pseudo-classes to help style according to whether the input is valid `:valid` or invalid `:invalid` and most importantly, the [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation) in javascript.

However, the form validation implementation used by me in this project is a custom one, which I prefer. I also used Regex to check user input and make sure it is in the right format and contains necessary characters.

### Continued development

I hope to have more practice with other input types for forms such as `file`, `date`, `range`, etc. I understand that working with external data from users is very important and I hope to get very good the UI/UX experience as well as making sure the data entered is the right data and in the format that is required.

### Useful resources

- [Clientside Form Validation MDN](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - This helped me understand Clientside Form Validation Better.
- [Great Platform FOr Testing Regex](https://regexr.com/) - This is a platform where i tested some regex for a custom password and email format.

- [Great Place To Get Cool Fonts](https://fontawesome.com/)

- [Great Place to FInd Easy To Use CSS3 Animations](https://animate.style/)

## Author

- Frontend Mentor - [@Nathandcwendy](https://www.frontendmentor.io/profile/Nathandcwendy)
- Twitter - [@nathanielsdiary](https://twitter.com/nathanielsdiary)

## Acknowledgments

Special Thanks To [MDN](https://developer.mozilla.org/en-US/) for provideing well written documentations that help developers like myself write better code.

Thanks Daniel Eden and Friends for creating an easy to use CSS animations library.

Thanks Font Awesome Creators and Contributors.
