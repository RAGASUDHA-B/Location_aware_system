document.getElementById("loginBtn").addEventListener("click", function () {
    const inputs = document.querySelectorAll("input");
    if (inputs[0].value === "" || inputs[1].value === "") {
        alert("Please enter username and password");
    } else {
        alert("Login successful!");
    }
});
