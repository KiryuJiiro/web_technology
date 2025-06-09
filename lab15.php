<?php


$con = mysqli_connect("localhost","root","","web");
$query = "select * from lab";
$result = mysqli_query($con,$query);




?>
<!DOCTYPE html>
<html>
<head>
    <title>User Information Table</title>
</head>
<body>

<h1>Retrieving Data from the Database</h1>
    <table border="1" cellpadding="10" cellspacing="0">
        <tr>
            <th>Username</th>
            <th>Password</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Qualification</th>
        </tr>
        <tr>
            <?php 

            while( $row = mysqli_fetch_assoc($result) )
            {

                ?>
                <td><?php echo $row['Username']?></td>
                <td><?php echo $row['Password']?></td>
                <td><?php echo $row['Email']?></td>
                <td><?php echo $row['Phone']?></td>
                <td><?php echo $row['Address']?></td>
                <td><?php echo $row['Qualification']?></td>

            </tr>

                <?php

            }

            ?>
            
           
      
       
    </table>
</body>
</html>

