$(document).ready(function(){
    $('#btn').bind("click",function(){
        $("input").blur();
        $("p").html("this is blur method that is used!!!");
    });
});
