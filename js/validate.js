function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  const guess = document.querySelector("#guess");
  const description = document.querySelector("#description");
  const date = document.querySelector("#date");
  if (guess.value == "" && guess.value.length === 0) {
    event.preventDefault();
  }
  if (description.value == "" && description.value.length === 0) {
    event.preventDefault();
  }
  if (date.value == "" && date.value.length === 0) {
    event.preventDefault();
  }

  const lat = document.querySelector(".lat-input");
  const lon = document.querySelector(".lon-input");
  if (
    lat.value != "" &&
    lat.value.length !== 0 &&
    lat.value >= -90 &&
    lat.value <= 90
  ) {
    document.querySelector(".lat-tip").style.display = "none";
  } else {
    event.preventDefault();
    document.querySelector(".lat-tip").style.display = "contents";
  }

  if (
    lon.value != "" &&
    lon.value.length !== 0 &&
    lon.value >= -180 &&
    lon.value <= 180
  ) {
    document.querySelector(".lon-tip").style.display = "none";
  } else {
    event.preventDefault();
    document.querySelector(".lon-tip").style.display = "contents";
  }
  console.log(
    "TODO - validate the longitude, latitude values before submitting"
  );
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
