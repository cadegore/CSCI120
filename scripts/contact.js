// An alert message about this page
// alert(`On this page:
// - You can select one of the location to show the phone number at that location.
// - You can select one of the contact reason to show the different form.
// - You can select one of the contact choice (email or phone number) to show the corresponding input field.

// - If you select the phone as contact choice, you can enter the phone number in this format: 123-456-7890. Otherwise, It's not valid.

// - All input fields will show green border and background when all input are valid, otherwise it will show in red border and red background.

// - Make sure you submit the form after you finish filling out the form. It will get redirected to another page.

// That's all for now! Thank you!
// `);

// get all the elements
var hidden = document.querySelectorAll(".hidden");
var contactReasonEl = document.getElementById("contactReason");
var userContactChoiceEl = document.querySelectorAll('input[name="userContactChoice"]');
var userAboutEl = document.getElementById("userAbout");
var userEmailEl = document.querySelector(".useremail");
var contactPhoneEl = document.getElementById("contactPhoneNumber");
var userJobChoiceEl = document.querySelector('input[name="userJobChoice"]');
var userEmailInput = document.getElementById("userEmail");
var userPhoneInput = document.getElementById("userPhone");
var userMessage = document.getElementById("userMessage");

// create event listener if neccessary
contactReasonEl.addEventListener("change", userContactReaon);
userContactChoiceEl[0].addEventListener("change", userContactChoice);
userContactChoiceEl[1].addEventListener("change", userContactChoice);
contactPhoneEl.addEventListener("change", showPhoneNumber);

// functions

function showPhoneNumber() {
  var contactPhone = contactPhoneEl[contactPhoneEl.selectedIndex].value;
  if (contactPhone == "location1") {
    hidden[0].classList.remove("hidden");
    hidden[1].classList.add("hidden");
  } else if (contactPhone == "location2") {
    hidden[1].classList.remove("hidden");
    hidden[0].classList.add("hidden");
  } else {
    hidden[0].classList.add("hidden");
    hidden[1].classList.add("hidden");
  }
}

function phoneNumberCheck() {
  userPhoneInput.addEventListener("input", () => {
    userPhoneInput.setCustomValidity("");
    userPhoneInput.checkValidity();
  });

  userPhoneInput.addEventListener("invalid", () => {
    if (userPhoneInput.value === "") {
      userPhoneInput.setCustomValidity("Enter phone number!");
    } else {
      userPhoneInput.setCustomValidity("Enter phone number in this format: 123-456-7890");
    }
  });
}

function userContactReaon() {
  var contactReason = contactReasonEl[contactReasonEl.selectedIndex].value;
  if (contactReason == "applyforjob") {
    hidden[2].classList.toggle("hidden");
    hidden[3].classList.add("hidden");
    hidden[4].classList.remove("hidden");
    userJobChoiceEl.setAttribute("required", "");
    userAboutEl.setAttribute("required", "");
    userEmailEl.setAttribute("required", "");
    userMessage.removeAttribute("required");
    userAboutEl.setAttribute("minlength", "100");
    userMessage.removeAttribute("minlength");
  } else if (contactReason == "others") {
    hidden[4].classList.remove("hidden");
    hidden[3].classList.remove("hidden");
    hidden[2].classList.add("hidden");
    userMessage.setAttribute("required", "");
    userJobChoiceEl.removeAttribute("required");
    userAboutEl.removeAttribute("required");
    userMessage.setAttribute("minlength", "50");
    userAboutEl.removeAttribute("minlength");
  } else {
    hidden[2].classList.add("hidden");
    hidden[3].classList.add("hidden");
    hidden[4].classList.add("hidden");
    userJobChoiceEl.removeAttribute("required");
    userAboutEl.removeAttribute("required");
    userEmailEl.removeAttribute("required");
  }
}

function userContactChoice() {
  if (userContactChoiceEl[0].checked) {
    hidden[5].classList.remove("hidden");
    hidden[6].classList.add("hidden");
    userPhoneInput.setAttribute("required", "");
    userEmailInput.removeAttribute("required");
    userEmailInput.setAttribute("type", "text");
    userPhoneInput.setAttribute("pattern", "[0-9]{3}-[0-9]{3}-[0-9]{4}");
    phoneNumberCheck();
  } else if (userContactChoiceEl[1].checked) {
    userEmailInput.setAttribute("type", "email");
    hidden[5].classList.add("hidden");
    hidden[6].classList.remove("hidden");
    userEmailInput.setAttribute("required", "");
    userPhoneInput.removeAttribute("required");
    userPhoneInput.setAttribute("type", "text");
    userPhoneInput.removeAttribute("pattern");
  }
}
