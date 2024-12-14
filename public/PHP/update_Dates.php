<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

include "connect.php";

// Vérifier si l'ID est valide
if (!isset($_POST['idUp']) || intval($_POST['idUp']) <= 0) {
    echo json_encode(["status" => "error", "message" => "لم يتم التعرف على الرقم المرجعي"]);
    exit;
}

$id = intval($_POST['idUp']);
$name = $_POST['Name'] ?? '';
$origin = $_POST['Origin'] ?? '';
$type = $_POST['Type'] ?? '';
$description = $_POST['Description'] ?? '';
$nutritionalInfo = $_POST['NutritionalInfo'] ?? '';
$price = $_POST['Price'] ?? '';
$imagePath = null;

// Gérer le téléchargement d'image
if (isset($_FILES['Image']) && $_FILES['Image']['error'] === UPLOAD_ERR_OK) {
    $imageTmpName = $_FILES['Image']['tmp_name'];
    $imageName = uniqid() . '_' . basename($_FILES['Image']['name']); // Créer un nom unique pour l'image
    $targetDir = "images/"; // Dossier cible
    $targetFilePath = $targetDir . $imageName;

    // Vérifier si le dossier uploads/ existe et créer si nécessaire
    if (!file_exists($targetDir)) {
        mkdir($targetDir, 0777, true); // Créer le dossier avec des permissions
    }

    // Déplacer l'image téléchargée
    if (move_uploaded_file($imageTmpName, $targetFilePath)) {
        $imagePath = $targetFilePath; // Chemin complet de l'image enregistrée
    } else {
        echo json_encode(["status" => "error", "message" => "حدت مشكل اثناء تنزيل الصورة"]);
        exit;
    }
}

// Construire la requête SQL de mise à jour
$query = "UPDATE dates SET Name = ?, Origin = ?, Type = ?, Description = ?, NutritionalInfo = ?, Price = ?" .
    ($imagePath ? ", ImagePath = ?" : "") . " WHERE ID = ?";

$stmt = $con->prepare($query);
if ($imagePath) {
    $stmt->bind_param("sssssdsi", $name, $origin, $type, $description, $nutritionalInfo, $price, $imagePath, $id);
} else {
    $stmt->bind_param("ssssddi", $name, $origin, $type, $description, $nutritionalInfo, $price, $id);
}

// Exécuter la requête et retourner le résultat
if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "! تم ااتحديت بنجاح"]);
} else {
    echo json_encode(["status" => "error", "message" => "حدت مشكل أثناء التحديت", "error" => $stmt->error]);
}
?>
