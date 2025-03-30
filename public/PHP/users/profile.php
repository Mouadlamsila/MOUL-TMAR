<?php
    include '../connect.php';
    $data = json_decode(file_get_contents('php://input'),true);
    if(!$data['id']){
        echo json_encode(['status'=> 'error' , 'message'=>'invalid id' ]);
    }
    $id= intval($data['id']);
    $query = "SELECT * from users where id =$id ";
    $result = mysqli_query($con , $query);
    if($result){
        $user = mysqli_fetch_assoc($result);
        echo json_encode(['status'=> 'success' , 'message' => 'user finded' , 'user'=> $user]);
    }
    else{
        
        echo json_encode(['status'=> 'error' , 'message'=>'user not founded' ]);
    }

?>