<!DOCTYPE html>
<html>
<head>
	<title>Admin Panel</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body >

<div class="container">
	<h1 class="text-center my-5">Admin Panel</h1>

	<table class="table table-bordered">
		<thead>
			<tr>
				<th>ID</th>
				<th>Name</th>
				<th>Number</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody>
			<?php
			$conn = mysqli_connect("localhost", "root", "", "cafe");
			$sql = "SELECT * FROM test";
			$result = mysqli_query($conn, $sql);

			if (mysqli_num_rows($result) > 0) {
				while($row = mysqli_fetch_assoc($result)) {
					echo "<tr>";
					echo "<td>" . $row['id'] . "</td>";
					echo "<td>" . $row['name'] . "</td>";
					echo "<td>" . $row['number'] . "</td>";
					echo "<td><a href='delete.php?id=" . $row['id'] . "' class='btn btn-danger'>Order Ready</a></td>";
					echo "</tr>";
				}
			} else {
				echo "<tr><td colspan='4'>No records found</td></tr>";
			}
			mysqli_close($conn);
			?>
		</tbody>
	</table>
</div>

</body>
</html>
