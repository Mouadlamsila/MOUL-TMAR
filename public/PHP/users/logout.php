<?php

include '../connect.php';
session_start();  // Start the session
if(session_destroy()){
    echo (json_encode(['status' => 'success']));
}
 // Destroy the session
$_SESSION = [];
