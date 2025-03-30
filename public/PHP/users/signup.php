<?php
include '../connect.php';
if (empty($_POST['firstName']) || empty($_POST['lastName']) || empty($_POST['userName']) || empty($_POST['email']) || empty($_POST['phone']) || empty($_POST['password'])) {
    echo (json_encode(['status' => 'error', 'message' => 'all input must append']));
}

$firstName = $_POST['firstName'] ;
$lastName = $_POST['lastName'];
$userName = $_POST['userName'] ;
$email = $_POST['email'] ;
$phone = $_POST['phone'] ;
$password = $_POST['password'] ;

if($password){
    $password = password_hash($password, PASSWORD_DEFAULT);
}

$Role = $_POST['Role'] ;

$query = "INSERT INTO `users`( `firstName`, `lastName`, `userName`, `email`, `phone`, `password` , `Role`) VALUES ('$firstName' , '$lastName' , '$userName' , '$email' , '$phone' , '$password' , '$Role')";
$result = mysqli_query($con, $query);
if ($result) {
    echo (json_encode(['status' => 'success', 'message' => 'user adedd']));
} else {
    echo (json_encode(['status' => 'error', 'message' => 'user dont adedd']));
}
