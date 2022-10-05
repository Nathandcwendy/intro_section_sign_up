let form = document.getElementById("form");
let formControl = document.querySelectorAll(".form-control");
let button = document.querySelector("button");
var inputs = document.querySelectorAll("input");

inputs.forEach((input) =>
  input.addEventListener("click", (e) => {
    console.log(e.target.validity.valid);
    formInput(e.target);
    inputs.forEach((input) => input.classList.add("opacity"));
    e.target.parentElement.lastElementChild.style.display = "";
  })
);

inputs.forEach((input) =>
  input.addEventListener("focus", (e) => {
    e.preventDefault();
    enterNextField(e.target);
    formInput(e.target);
    inputs.forEach((input) => input.classList.add("opacity"));
    e.target.parentElement.lastElementChild.style.display = "";
    e.target.parentElement.classList.remove("good");
  })
);

inputs.forEach((input) =>
  input.addEventListener("blur", (e) => {
    e.preventDefault();
    checkNullInput(e.target.parentElement);
    validateForm(e.target.parentElement);
  })
);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkForms();
});

function formInput(e) {
  e.parentElement.classList.remove("error", "visible");
  if (e.name === "password") {
    e.placeholder = e.name;
  }
}

function checkForms() {
  formControl.forEach((form) => validateForm(form));
}

function validateFirstName(form) {
  if (typeof form.firstElementChild.value === "string") {
    form.classList.remove("error");
    // form.firstElementChild.placeholder = ""
    form.lastElementChild.style.display = "";
    form.classList.add("good");
  } else {
    form.classList.add("error");
    form.lastElementChild.style.display = "flex";
  }
}

function validateLastName(form) {
  if (typeof form.firstElementChild.value === "string") {
    form.classList.remove("error");
    // form.firstElementChild.placeholder = ""
    form.lastElementChild.style.display = "";
    form.classList.add("good");
  } else {
    form.classList.add("error");
    form.lastElementChild.style.display = "flex";
  }
}

function validateEmail(form) {
  if (form.firstElementChild.value.includes("@")) {
    form.classList.remove("error", "visible");
    form.firstElementChild.placeholder = "";
    form.classList.add("good");
  } else {
    form.firstElementChild.value = "";
    form.classList.add("error");
    form.firstElementChild.placeholder = "email@example/com";
    form.classList.add("visible");
  }
}

function validatePassword(form) {
  if (form.firstElementChild.value.length < 8) {
    form.classList.add("error", "visible");
    form.firstElementChild.value = "";
    form.firstElementChild.placeholder =
      "password should be at least 8 characters";
    form.lastElementChild.style.display = "none";
  } else {
    form.classList.remove("error", "visible");
    form.firstElementChild.placeholder = "";
    form.classList.add("good");
  }
}

function validateForm(form) {
  if (
    form.firstElementChild.value == "" ||
    form.firstElementChild.value == null
  ) {
    form.classList.add("error");
    form.lastElementChild.style.display = "flex";
  } else if (form.firstElementChild.name === "firstName") {
    validateFirstName(form);
  } else if (form.firstElementChild.name === "lastName") {
    validateLastName(form);
  } else if (form.firstElementChild.name === "email") {
    validateEmail(form);
  } else if (form.firstElementChild.name === "Password") {
    validatePassword(form);
  } else {
    form.classList.remove("error");
    // form.firstElementChild.placeholder = ""
    form.lastElementChild.style.display = "";
  }
}

function checkNullInput(form) {
  if (
    form.firstElementChild.value == "" ||
    form.firstElementChild.value == null
  ) {
    form.classList.add("error");
    form.lastElementChild.style.display = "flex";
  } else {
    form.classList.remove("error");
    // form.firstElementChild.placeholder = ""
    form.lastElementChild.style.display = "";
  }
}

function enterNextField(e) {
  e.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
      let x = [...inputs].indexOf(e);
      x += 1;
      e.blur();
      if (x < 4) {
        event.preventDefault();
        if (inputs[x].value == "" || inputs[x].value == null) {
          inputs[x].focus();
        } else {
          x += 1;
          if (x < 4) {
            if (inputs[x].value == "" || inputs[x].value == null) {
              inputs[x].focus();
            } else {
              x += 1;
              if (x < 4) {
                if (inputs[x].value == "" || inputs[x].value == null) {
                  inputs[x].focus();
                }
              }
            }
          }
        }
      } else {
        form.requestSubmit();
      }
    } else {
      e.classList.remove("error", "visible");
      e.placeholder = "";
      e.parentElement.lastElementChild.style.display = "";
    }
  });
}
