<?php


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Récupérer les données envoyées en JSON
    $data = json_decode(file_get_contents("php://input"), true);

    // Vérifier si les champs nécessaires sont fournis
    if (
        isset($data['name']) &&
        isset($data['email']) &&
        isset($data['cardNumber']) &&
        isset($data['expiryDate']) &&
        isset($data['cvv'])
    ) {
        // Simuler le traitement du paiement
        $name = htmlspecialchars($data['name']);
        $email = htmlspecialchars($data['email']);
        $cardNumber = htmlspecialchars($data['cardNumber']);
        $expiryDate = htmlspecialchars($data['expiryDate']);
        $cvv = htmlspecialchars($data['cvv']);

        // Vérifier la validité des données (simplifié)
        if (strlen($cardNumber) === 16 && strlen($cvv) === 3) {
            // Ici, vous pouvez appeler une API de paiement réelle (par exemple, Stripe, PayPal, etc.)
            
            // Simuler un paiement réussi
            echo json_encode([
                "status" => "success",
                "message" => "تمت معالجة الدفع بنجاح!",
                "transaction_id" => uniqid("txn_")
            ]);
        } else {
            echo json_encode([
                "status" => "error",
                "message" => "رقم البطاقة أو رمز CVV غير صالح."
            ]);
        }
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "جميع الحقول مطلوبة."
        ]);
    }
} else {
    echo json_encode([
        "status" => "error",
        "message" => "طريقة غير مسموح بها."
    ]);
}
?>
