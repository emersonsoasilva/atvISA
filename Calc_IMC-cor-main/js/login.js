
document.getElementById("form-login")
document.addEventListener("submit", function (event) {
    event.preventDefault();

    let usuario = document.getElementById("text").value;
    let password = document.getElementById("password").value;
    let rememberPassword = document.getElementById("remember-password");

    if (usuario === "admin" && password === "admin") {
      window.location.href = "home.html";
    } else if (usuario === "" && password === "") {
      document.getElementById("mensage-error").innerHTML =
        "Por favor, preencha todos os campos";
    } else {
      document.getElementById("mensage-error").innerHTML =
        "Usuário ou senha incorreto!";
        rememberPassword.classList.toggle("rememberActive")
    };
  });

