$(document).ready(function()
{
    
    $("#button1").click(function()
    {
        let val1 = $(".class1").html() 
        let val2 = $(".class2").html()
        $(".class1").html(val2)
        $(".class2").html(val1)
    })
});