<?php
    
    header("Access-Control-Allow-Origin: *");
   
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

    include "connect.php";

    if (!$con) {
        echo json_encode(["status" => "error", "message" => "Failed to connect to database.", "error" => mysqli_connect_error()]);
        exit();
    }

    $query = "SELECT * from dates";
    $result = mysqli_query($con, $query);

    if(mysqli_num_rows($result) === 0){
        echo json_encode(["status" => "error", "message" => "جاري تحميل المعلومات ...", "Error" => mysqli_error($con)]);
    }else{
        $dates = mysqli_fetch_all($result, MYSQLI_ASSOC);
        echo json_encode(["status" => "success", "message" => "تم تحميل المعلومات بنجاح .", "dates" => $dates]);
    }

    mysqli_close($con);

?>