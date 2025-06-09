let para = document.getElementById("p1");

function change_color() {
    para.classList.toggle("red");
}


let change_text = () => {
    alert("hello"); 
    para.innerHTML = "Hello";
    // para.style.backgroundColor = "blue";
    setInterval(change_color, 100);
}
