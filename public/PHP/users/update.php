<?php

include '../connect.php';

extract($_POST);

if(!$id){
    echo json_encode(['status'=> 'error' , 'message'=>'invalid id' ]);
}

$query = "SELECT password from users where id = '$id' ";
$result = mysqli_query($con, $query);
$user = mysqli_fetch_assoc($result);


if (password_verify($password, $user['password'])) {

    $passwordHash = password_hash($newPassword ,PASSWORD_DEFAULT);
    $query1 = "UPDATE users 
    set 
    firstName = '$firstName',
    lastName = '$lastName',
    userName = '$userName',
    email = '$email',
    phone = '$phone',
    password = '$passwordHash'
    where id = '$id' ";

    $result = mysqli_query($con, $query1);
    if ($result) {
        echo json_encode(["status" => "success", "message" => "user updated successfuly"]);
    } else {
        echo json_encode(["status" => "error", "message" => "user does not updated!"]);
    }
}else{
    echo json_encode(["status" => "error", "message" => "password incorrect"]);
}
