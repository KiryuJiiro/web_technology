<?php
$username = $_POST['username'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Encrypt the password
$email = $_POST['email'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$qualification = $_POST['qualification'];



echo'Data inserted in database.';
?>

<?php

    $con = mysqli_connect("localhost","root","","web");
    mysqli_query($con,"insert into lab(Username,Password,Email,Phone,Address,Qualification) values('$username','$password','$email','$phone','$address','$qualification')");
   
?>

