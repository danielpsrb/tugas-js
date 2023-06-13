function login() {
    // Get the username and password from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the credentials match
    if (username === "admin" && password === "12345") {
      // Display a success message with the username
      alert("Sukses. anda login sebagai <<<" + username + ">>>");
      document.body.style.backgroundColor = "green"; // Change the background color to green

      // Hide the form elements
      document.getElementById("username").style.display = "none";
      document.getElementById("password").style.display = "none";
      document.querySelector("form > label[for='username']").style.display = "none";
      document.querySelector("form > label[for='password']").style.display = "none";
      document.querySelector("form > button").style.display = "none";
      document.querySelector("form").style.display = "none";
    } else {
      // Display an error message
      alert("Login gagal. <<< " + username +">>>");
      document.body.style.backgroundColor = "red"; // Change the background color to red

      // Hide the form elements
      document.getElementById("username").style.display = "none";
      document.getElementById("password").style.display = "none";
      document.querySelector("form > label[for='username']").style.display = "none";
      document.querySelector("form > label[for='password']").style.display = "none";
      document.querySelector("form > button").style.display = "none";
      document.querySelector("form").style.display = "none";
    }
  }