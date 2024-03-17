const pwdInput = document.querySelector(".pwd-field input");
const eyeIcon = document.querySelector(".pwd-field i");
const ruleList = document.querySelectorAll(".rule-list li");

const pwdRules = [
  { regex: /.{8,}/, index: 0 },
  { regex: /[0-9]/, index: 1 },
  { regex: /[a-z]/, index: 2 },
  { regex: /[A-Z]/, index: 3 },
  { regex: /[^A-Za-z0-9]/, index: 4 },
];

pwdInput.addEventListener("keyup", (e) => {
  pwdRules.forEach((rule) => {
    const isValid = rule.regex.test(e.target.value);
    const ruleName = ruleList[rule.index];

    if (isValid) {
      ruleName.firstElementChild.className = "fa-solid fa-check";
      ruleName.classList.add("valid");
    } else {
      ruleName.firstElementChild.className = "fa-solid fa-close";
      ruleName.classList.remove("valid");
    }
  });
});

eyeIcon.addEventListener("click", () => {
  pwdInput.type = pwdInput.type === "password" ? "text" : "password";
  eyeIcon.className = `fa-solid fa-eye${
    pwdInput.type === "password" ? "" : "-slash"
  }`;
});
