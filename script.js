function submitForm() {
  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  // Validate form (you can add more validation as needed)
  if (name === "" || email === "" || subject === "" || message === "") {
    alert("Please fill in all fields");
    return;
  }

  // Here, you can perform additional actions, such as sending the form data to a server or displaying a confirmation message
  alert("Form submitted successfully!");

  // Reset form fields
  document.getElementById("contact-form").reset();
}
