// Redirect to login page if not logged in
if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
}

// Logout function
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}
