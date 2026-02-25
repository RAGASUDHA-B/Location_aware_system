$(document).ready(function () {
    $("input").blur(function () {
        if ($(this).val() === "") {
            $(this).css("background-color", "#ff1010");
        } else {
            $(this).css("background-color", "#e4ffba");
        }
    });
    $("#loginBtn").click(function () {
        let username = $("#username").val();
        let password = $("#password").val();
        if (username === "" || password === "") {
            $(".login-box").animate({ left: "-10px" }, 50)
        .animate({ left: "10px" }, 50)
        .animate({ left: "-10px" }, 50)
        .animate({ left: "10px" }, 50)
        .animate({ left: "0px" }, 50);
            $("#username").css("background-color", "#ff1010");
            $("#password").css("background-color", "#ff1010");
            alert("Please enter username and password");

        } else {
            $(".login-box").fadeTo(300, 0.5).fadeTo(300, 1);
            //$(".input").css("background-color", "#e4ffba");
            alert("Login successful!");
        }
        $ajax({
            url:"#",
            type:"POST",
            data:{
                username:username,
                password:password
            },
            success:function(response){
                if(username==="admin" && password==="password"){
                    alert("Login successful!");
                }else{
                    alert("Invalid username or password");
                }

        });
    });

});