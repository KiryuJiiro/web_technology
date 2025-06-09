let fucn = ()=>
{
	let password1;
	password1 = document.form1.pass1.value;
	let password2;
	password2 = document.form1.pass2.value;
	if(password1 === password2)
	{
		alert("same same");
		let a = parseInt(prompt("enter a value"));
		let b = parseInt(prompt("enter another value"));
		alert(a+b);
	}
	else
	{
		alert("Wrong pass")
	}
}
