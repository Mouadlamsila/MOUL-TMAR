<?php
        header("Access-Control-Allow-Origin: *");
   
        header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
        
        header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

        include "connect.php";

    if (!$con) {
        echo json_encode(["status" => "error", "message" => "Failed to connect to database.", "error" => mysqli_connect_error($con)]);
        exit();
    }
    $data = json_decode(file_get_contents("php://input"),true);

    if(!isset($data['id']) || intval($data["id"])<=0){
        echo json_encode(["status" => "error" , "message" => "invalide ID" ]);
        exit();
    }
    $id = intval($data["id"]);

    $query = "DELETE from dates where ID = '$id' ";
    

    if(mysqli_query(  $con, $query) === true){
        echo json_encode(["status" => "success" , "message" => "operation valider"]);
    }else{
        echo json_encode(["status" => "error" , "message" => "opertion non vlider" ]);
    }

    

?>