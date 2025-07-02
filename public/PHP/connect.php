<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$host = "sql203.infinityfree.com";               // MySQL Hostname
$user = "if0_39376655";                          // Username
$pass = "RGepvI8ngdgQ0i";                        // Password
$db   = "if0_39376655_moul_tmar";                // Database name
$port = 3306;                                     // Optional, but usually 3306

// الاتصال بقاعدة البيانات
$con = new mysqli($host, $user, $pass, $db, $port);

// التحقق من الاتصال
if ($con->connect_error) {
    die("❌ Connection failed: " . $con->connect_error);
}

// تعيين الترميز لتفادي مشكل اللغة العربية
$con->set_charset("utf8mb4");

// ✅ تم الاتصال بنجاح
echo "✅ Connected to InfinityFree MySQL database!";
