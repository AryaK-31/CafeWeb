<?php
$conn = mysqli_connect("localhost", "root", "", "cafe");

if (isset($_GET['id'])) {
	$id = $_GET['id'];
	$sql = "DELETE FROM test WHERE id=$id";
	mysqli_query($conn, $sql);
	header("Location: display.php");
}

mysqli_close($conn);
?>
