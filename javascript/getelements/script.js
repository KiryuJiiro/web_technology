let swap = () =>
{
    let header1 = document.getElementsByTagName("h1")[0].innerHTML;
    let header2 = document.getElementsByTagName("h1")[1].innerHTML;
    let color = document.getElementsByTagName("h1")[0].style.color;
    let color2 = document.getElementsByTagName("h1")[1].style.color;
    document.getElementById("head1").innerHTML = header2;   
    document.getElementById("head2").innerHTML  = header1;
    document.getElementById("head2").style.color =color;
    document.getElementById("head1").style.color =color2;
}
