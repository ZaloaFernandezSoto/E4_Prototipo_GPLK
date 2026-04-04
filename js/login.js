function login() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    if (user && pass) {
        window.location.href = "dashboard.html";
    } else {
        alert("Introduce credenciales");
    }
}