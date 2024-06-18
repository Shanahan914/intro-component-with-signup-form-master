document.addEventListener("DOMContentLoaded", function () {
  const email = document.getElementById("email");
  const inputs = document.getElementsByTagName("input");
  const submitBtn = document.getElementById("submit");
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    //to determine when all fields are valid
    let allValid = 0;

    for (i = 0; i < inputs.length; i++) {
      if (!inputs[i].value.length) {
        // nextElement refers to the error message throughout
        inputs[i].nextElementSibling.style.display = "block";
        // previousElement refers to the error icon throughout
        inputs[i].previousElementSibling.style.display = "block";
      } else {
        inputs[i].nextElementSibling.style.display = "none";
        inputs[i].previousElementSibling.style.display = "none";
        allValid++;
      }
    }

    if (!email.value.match(emailRegex)) {
      email.nextElementSibling.style.display = "block";
      email.previousElementSibling.style.display = "block";
      allValid--;
    }
    if (allValid === inputs.length) {
      // All inputs are valid, clear the form
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
      }
    }
  });
});
