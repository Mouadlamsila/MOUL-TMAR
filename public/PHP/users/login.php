<?php
   
    include '../connect.php';

    if(empty($_POST['userName']) || empty($_POST['password'])){
        echo json_encode(['status' => 'error', 'message' => '3amar']);
    }
    extract($_POST);
    
    $query = "SELECT * from users where userName = '$userName'";
    $result = mysqli_query($con, $query);
    $user = mysqli_fetch_assoc($result);
    if ($user) {
        if(password_verify($password, $user['password'])){
            session_start();
            $_SESSION['userID'] = $user['id'];
            echo (json_encode(['status' => 'success', 'message' => 'user exist', 'user' => $user, 'userID' => $_SESSION['userID']]));
        }else{
            echo (json_encode(['status' => 'error', 'message' => 'Password incorrect']));
        }
        
    } else {
        echo (json_encode(['status' => 'error', 'message' => 'user dont exist']));
    }
?>