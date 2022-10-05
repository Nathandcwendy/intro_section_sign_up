let form = document.getElementById("form");
var inputs = document.querySelectorAll("input");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

const firstNameControl = document.getElementById("firstNameControl");
const lastNameControl = document.getElementById("lastNameControl");
const emailControl = document.getElementById("emailControl");
const passwordControl = document.getElementById("passwordControl");

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
const NAME_REGEX = /^[a-z ,.'-]{2,}$/i;
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const firstNameEmpty = "First Name cannot be empty";
const lastNameEmpty = "Last Name cannot be empty";
const emailEmpty = "Email cannot be empty";
const passwordEmpty = "Password cannot be empty";

const firstNameInfo =
  "Name must have at least 2 Characters. No special characters or digits!";
const lastNameInfo =
  "Name must have at least 2 Characters. No special characters or digits!";
const emailInfo = "Looks like this is not an email";
const passwordInfo =
  "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number and no special characters";

const firstNameObj = {
  input: firstName,
  control: firstNameControl,
  info: firstNameInfo,
  empty: firstNameEmpty,
  regex: NAME_REGEX,
};

const lastNameObj = {
  input: lastName,
  control: lastNameControl,
  info: lastNameInfo,
  empty: lastNameEmpty,
  regex: NAME_REGEX,
};

const emailObj = {
  input: email,
  control: emailControl,
  info: emailInfo,
  empty: emailEmpty,
  regex: EMAIL_REGEX,
};

const passwordObj = {
  input: password,
  control: passwordControl,
  info: passwordInfo,
  empty: passwordEmpty,
  regex: PASSWORD_REGEX,
};

const inputObjsArray = [firstNameObj, lastNameObj, emailObj, passwordObj];

const validateInput = ({ input, control, info, empty, regex }, e) => {
  if (input.value) {
    if (!regex.test(input.value)) {
      control.classList.add("error");
      control.lastElementChild.style.display = "flex";
      control.lastElementChild.innerText = info;
      if (regex === EMAIL_REGEX && e?.type === "blur") {
        control.firstElementChild.value = "";
        control.firstElementChild.placeholder = "email@example.com";
        control.classList.add("visible");
      }
      regex === PASSWORD_REGEX && e?.type === "blur"
        ? (control.firstElementChild.value = "")
        : false;
      return false;
    } else {
      control.classList.remove("error");
      control.lastElementChild.style.display = "";
      control.classList.add("good");
      if (regex === EMAIL_REGEX) {
        control.classList.remove("visible");
        control.firstElementChild.placeholder = "";
      }
      return true;
    }
  } else {
    control.lastElementChild.innerText = empty;
    control.classList.add("error");
    control.lastElementChild.style.display = "flex";
  }
};

const checkInput = ({ input, control, regex }) => {
  if (input.value) {
    if (regex.test(input.value)) {
      control.classList.remove("error");
      // control.firstElementChild.placeholder = ""
      control.lastElementChild.style.display = "";
      control.classList.add("good");
    } else {
      control.classList.remove("good");
      control.lastElementChild.style.display = "";
      control.classList.remove("error");
    }
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputObjsArray.forEach((inputObj) => validateInput(inputObj, e));
  const isAnyInvalid = inputObjsArray.filter(
    (inputObj) => !validateInput(inputObj)
  );
  if (!isAnyInvalid) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  } else {
    const inputToFocus = isAnyInvalid.find(
      (invalid) => document.activeElement === invalid.input
    );
    if (inputToFocus) {
      inputToFocus.input.focus();
    } else {
      isAnyInvalid.find((inputObj) => !validateInput(inputObj)).input.focus();
    }
  }
});

inputs.forEach((input) => {
  input.addEventListener("focus", (e) => {
    e.preventDefault();
    inputs.forEach((input) => input.classList.add("opacity"));
    e.target.parentElement.lastElementChild.style.display = "";
    e.target.parentElement.classList.remove("good");
  });
});

inputObjsArray.forEach((inputObj) => {
  inputObj.input.addEventListener("input", (e) => {
    checkInput(inputObj);
  });
  inputObj.input.addEventListener("blur", (e) => {
    validateInput(inputObj, e);
  });
});
