let email = document.getElementById("email");
let password = document.getElementById("password");
let icon = document.getElementById("icon");
let name = document.getElementById("name");
// creat pattern for email
let pattern = /^[a-zA-Z]\w*@gmail.com$/;
email.addEventListener("input", () => {
  if (email.value != "") {
    if (pattern.test(email.value)) {
      email.style.border = "2px solid #76c893";
    } else {
      email.style.border = "2px solid red";
    }
  } else {
    email.style.border = "none";
    email.style.borderBlockEnd = "2px solid #76c893";
  }
});
// creat pattern for password
let pattern2 = /^(\w|\W){8,}$/;
password.addEventListener("input", () => {
  if (password.value != "") {
    icon.style.display = "block";
    if (pattern2.test(password.value)) {
      password.style.border = "2px solid #76c893";
    } else {
      password.style.border = "2px solid red";
    }
  } else {
    icon.style.display = "none";
    password.style.border = "none";
    password.style.borderBlockEnd = "2px solid #76c893";
  }
});
icon.addEventListener("click", () => {
  if (password.type == "password") {
    password.type = "text";
    password.focus();
    icon.setAttribute("class", "fa fa-eye");
  } else {
    password.type = "password";
    password.focus();
    icon.setAttribute("class", "fa fa-eye-slash");
  }
});
// creat pattern for name
let pattern3 = /^[a-zA-Z]+\s[a-zA-Z]{1,}$/;
name.addEventListener("input", () => {
  if (name.value != "") {
    if (pattern3.test(name.value)) {
      name.style.border = "2px solid #76c893";
    } else {
      name.style.border = "2px solid red";
    }
  } else {
    name.style.border = "none";
    name.style.borderBlockEnd = "2px solid #76c893";
  }
});
