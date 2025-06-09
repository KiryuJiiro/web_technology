console.log("Hello")
let check = () =>
{
	let name = document.form1.uname.value;
	let mail =  document.form1.mail.value;
	let address = document.form1.address.value;
	let contact = document.form1.number.value;
	let feedback =  document.form1.feedback.value;
	check_null(name);
	check_null(mail);
	check_null(address);
	check_null(contact);
	check_null(feedback);
	
	if(name.length < 3)
	{
		alert("Name cannot be less than 3");
	}
}

let check_null = (value) =>
{
	if(value == "")
	{
		console.error("No empty value allowed");
		alert("Re-enter the value");
	}
}


