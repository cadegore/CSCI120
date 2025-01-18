// Good Luck
var phoneNumber = document.getElementById('user_phone');
phoneNumber.addEventListener('blur', luckyMessage);

function luckyMessage() {
  alert('You are a lucky person!');
}

// Name
var userName = document.getElementById('user_name');
userName.addEventListener('blur', nameMessage);

var greetMessage = document.querySelector('.greetMessage');
function nameMessage() {
  if (userName.value.length != 0) {
    greetMessage.style.display = 'block';
    greetMessage.innerHTML = `Have we met before, ${userName.value}?`;
  } else {
    greetMessage.style.display = 'none';
  }
}
// Good Choice
var userChoice = document.getElementById('fav_dish');
var userGoodChoice = document.querySelector('.userGoodChoice');
userChoice.addEventListener('blur', choiceMessage);

var goodChoice = document.querySelector('.good_choice');
function choiceMessage() {
  if (userChoice.value != 'none') {
    goodChoice.style.display = 'block';
    goodChoice.innerHTML = 'Good choice';
    userGoodChoice.style.backgroundColor = 'lightblue';
  } else {
    userGoodChoice.style.backgroundColor = 'white';
    goodChoice.style.display = 'none';
  }
}

// Rating
// Changes the rating number when the user changes the rating
var userCurrentRating = document.getElementById('user_current_rating');
function showCurrentRating(currentRating) {
  userCurrentRating.innerHTML = currentRating;
}

var userRating = document.getElementById('user_rating');
var userRatingMessage = document.querySelector('.user_rating_message');
userRating.addEventListener('change', RatingMessage);
// Display Message Based on User's Rating
function RatingMessage() {
  userRatingMessage.style.display = 'block';
  if (userRating.value == 1) {
    userRatingMessage.innerHTML = 'Sorry about that, leave comments below tell us why. Thank you';
    userRatingMessage.style.backgroundColor = '#c62d2d';
    userRatingMessage.style.color = 'white';
  } else if (userRating.value == 2) {
    userRatingMessage.innerHTML =
      "We're sorry to hear that, leave comments below tell us why. Thank you!";
    userRatingMessage.style.backgroundColor = '#c95b5b';
    userRatingMessage.style.color = 'white';
  } else if (userRating.value == 3) {
    userRatingMessage.innerHTML = 'Help us improve by leave comments. Thank you!';
    userRatingMessage.style.backgroundColor = '#eb8989';
    userRatingMessage.style.color = 'white';
  } else if (userRating.value == 4) {
    userRatingMessage.innerHTML =
      'Thank you for your feedback. We will improve. Please leave comments below tell us how we can improve. Thank you!';
    userRatingMessage.style.backgroundColor = '#ea9f9f';
    userRatingMessage.style.color = 'white';
  } else if (userRating.value == 5) {
    userRatingMessage.innerHTML =
      'Thank you for your feedback. We love to hear more about your experience by leave comments below. Thank you!';
    userRatingMessage.style.backgroundColor = '#f2ff00';
    userRatingMessage.style.color = 'black';
  } else if (userRating.value == 6) {
    userRatingMessage.innerHTML =
      'Thank you for your feedback. If you would like to tell us more about your experience, please leave the feedback below. Thank you!';
    userRatingMessage.style.backgroundColor = '#d9ffa5';
    userRatingMessage.style.color = 'black';
  } else if (userRating.value == 7) {
    userRatingMessage.innerHTML =
      'Thank you for your feedback. We will continue to improve. Please leave comments below tell us how we can improve. Thank you!';
    userRatingMessage.style.backgroundColor = '#c7f685';
    userRatingMessage.style.color = 'black';
  } else if (userRating.value == 8) {
    userRatingMessage.innerHTML =
      'Thank you for your feedback. Tell us more about your experience and how we can improve by leave comments below. Thank you!';
    userRatingMessage.style.backgroundColor = '#adde68';
    userRatingMessage.style.color = 'black';
  } else if (userRating.value == 9) {
    userRatingMessage.innerHTML =
      'Thank you for your feedback. We are glad you enjoyed our food. You are welcome to leave comments below tell us more. Thank you!';
    userRatingMessage.style.backgroundColor = '#9ad34a';
    userRatingMessage.style.color = 'black';
  } else {
    userRatingMessage.innerHTML =
      'Thank you for your feedback. Hope see you next time. Please leave comments below if you have other questions. Thank you!';
    userRatingMessage.style.backgroundColor = '#86c62d';
    userRatingMessage.style.color = 'black';
  }
}
// Reset
var resetButton = document.querySelector('.resetButton');
var form = document.querySelector('form fieldset fieldset');
resetButton.addEventListener('click', resetForm);

function resetForm() {
  alert('Get it right this time!');
  form.style.backgroundColor = '#f8dd72';
  userRatingMessage.style.display = 'none';
  userGoodChoice.style.backgroundColor = 'transparent';
  goodChoice.style.display = 'none';
  userCurrentRating.innerHTML = 10;
  greetMessage.style.display = 'none';
}

//Tricked You
var submitButton = document.querySelector('.submitButton');
submitButton.addEventListener('click', trickedYou);

function trickedYou() {
  var phoneNumberCheck = document.querySelector('.phoneNumberCheck');
  if (phoneNumber.value == '' || phoneNumber.value == null) {
    phoneNumberCheck.innerHTML = 'Tricked you--phone number is required!';
    phoneNumberCheck.style.backgroundColor = 'gray';
    phoneNumberCheck.style.color = 'red';
    phoneNumber.setAttribute('required', '');
  } else {
    phoneNumberCheck.style.backgroundColor = 'lightblue';
    phoneNumberCheck.style.color = 'green';
    phoneNumberCheck.innerHTML = 'Thanks--can I call you tomorrow?';
  }
}
