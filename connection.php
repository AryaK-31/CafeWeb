<?php

    $host = "127.0.0.1";  // specify the server host
    $port = "3308";   // specify the server port
    $user = "root";   // specify the username
    $password = "";   // specify the password
    $dbname = "TONE";   // specify the database name

    // Create a new mysqli object
    $conn = new mysqli($host, $user, $password, $dbname, $port);

  
 // Check connection
 if($conn === false){
     die("ERROR: Could not connect. "
         . mysqli_connect_error());
 }
  
 // Taking all 5 values from the form data(input)
 $name =  $_POST['name'];
 $number = $_POST['number'];

  

 $sql = "INSERT INTO TEST VALUES ( '$name', '$number')";
  
 if(mysqli_query($conn, $sql)){
     echo "<h3>data stored in a database successfully."
         . " Please browse your localhost php my admin"
         . " to view the updated data</h3>";

     echo nl2br("\n$name\n $number\n ");
 } else{
     echo "ERROR: Hush! Sorry $sql. "
         . mysqli_error($conn);
 }
  
 // Close connection
 mysqli_close($conn);
 ?>