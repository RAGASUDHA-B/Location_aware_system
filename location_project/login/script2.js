$(document).ready(function () {

    $("input").blur(function () {
        if ($(this).val() === "") {
            $(this).css("background-color", "#ff1010");
        } else {
            $(this).css("background-color", "#e4ffba");
        }
    });
    $("#loginBtn").click(function () {
        let username = $("#username").val().trim();
        let password = $("#password").val().trim();
        if (username === "" || password === "") {
            $(".login-box").animate({ left: "-10px" }, 50)
            .animate({ left: "10px" }, 50)
            .animate({ left: "-10px" }, 50)
            .animate({ left: "10px" }, 50)
            .animate({ left: "0px" }, 50);
            if (username === "") {
                $("#username").css("background-color", "#ff1010");
            }
            if (password === "") {
                $("#password").css("background-color", "#ff1010");
            }
            alert("Please enter username and password");
            return; 
        }
        $.ajax({
            url: "login.php",
            type: "POST",
            data: {
                username: username,
                password: password
            },
            success: function (response) {

                if (response.trim() === "success") {

                    $(".login-box").fadeTo(300, 0.5).fadeTo(300, 1);

                    alert("Login successful!");

                    setTimeout(function () {
                        location.reload();
                    }, 1000);

                } else {
                    alert("Invalid username or password");
                }
            },
            error: function (xhr, status, error) {
                console.log(error);
                alert("Server error - check Apache or file path");
            }
        });

    });

});