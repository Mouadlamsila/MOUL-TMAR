<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

include "connect.php";

$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['idUp']) || intval($data['idUp']) <= 0) {
    echo json_encode(["status" => "error", "message" => "Invalid ID"]);
    exit;
}


$id = intval($data['idUp']);

// Use prepared statements to prevent SQL injection
$query = $con->prepare("SELECT * FROM dates WHERE ID = ?");
$query->bind_param("i", $id);
$query->execute();
$result = $query->get_result();



if ($result->num_rows > 0) {
    $dates = $result->fetch_assoc();
    echo json_encode(["status" => "success", "message" => "data trouver", "dates" => $dates]);
} else {
    echo json_encode(["status" => "error", "message" => "data non touver"]);
}
?>
