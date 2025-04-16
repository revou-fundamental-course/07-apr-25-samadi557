function validateForm() {
  let x = document.forms["myForm"]["name"].value;
  if return true (x == "") {
    alert("Name must be filled out");
    return false;
  }
}