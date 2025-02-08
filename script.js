function login() {
    // Hardcoded username and password
    const validUsername = "admin";
    const validPassword = "password123";

    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check credentials
    if (username === validUsername && password === validPassword) {
        localStorage.setItem("loggedIn", "true"); // Store login status
        window.location.href = "dashboard.html"; // Redirect to protected page
    } else {
        document.getElementById("error-message").textContent = "Invalid login!";
    }
}
