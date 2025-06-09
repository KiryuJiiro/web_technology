$(document).ready(function()
{
    // $("#head1").hide()
    $("#button1").click(function()
    {
        // alert("Working")
        $("#head1").toggle()
        $(".head1").css("color","red")
        $(".head1").css("background-color","yellow")
        $(".head1").css("font-size","200px")
        $(".head1").css("background-size","cover")
        $(".head1").css("background-image","url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJxo2NFiYcR35GzCk5T3nxA7rGlSsXvIfJwg&s')")

    })
});