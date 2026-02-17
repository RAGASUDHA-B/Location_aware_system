function sho(){
    document.getElementById("d1").innerHTML=Date();
}
document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const terms = document.getElementById("terms");

    if (!terms.checked) {
        alert("You must accept the terms and services!");
        return;
    }

    alert("Registration Successful!");
});
function sho(){
    document.getElementById("d1").innerHTML=Date();
}
