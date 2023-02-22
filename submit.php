<?php
    $host = "127.0.0.1";  // specify the server host
    $port = "3306";   // specify the server port
    $user = "root";   // specify the username
    $password = "";   // specify the password
    $dbname = "cafe";   // specify the database name

    if(isset($_POST['name']) && isset($_POST['number'])) {
        $name = $_POST['name'];
        $number = $_POST['number'];
      // Create a new mysqli object
      $conn = new mysqli($host, $user, $password, $dbname, $port);

  
      // Check connection
      if($conn === false){
          die("ERROR: Could not connect. "
              . mysqli_connect_error());
      }
    
        $sql = "INSERT INTO test (name, number) VALUES ('$name', '$number')";
    
        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    
        $conn->close();
    }
    ?>
    