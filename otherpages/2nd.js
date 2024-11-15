document.addEventListener("DOMContentLoaded", function () {
  const signUpButton = document.getElementById("signUp");
  const signInButton = document.getElementById("signIn");
  const container = document.getElementById("container");

  signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
  });

  signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
  });

  if (window.location.hash === "#signUp") {
    console.log("Switching to Sign Up");
    container.classList.add("right-panel-active");
  } else if (window.location.hash === "#signIn") {
    console.log("Switching to Sign In");
    container.classList.remove("right-panel-active");
  }
});
