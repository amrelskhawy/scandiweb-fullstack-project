<?php
require("../Database.php");
$config = require("../Config.php");
header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json");


$db = new Database($config['Database']);

$products = $db->query('select * from products');

echo json_encode($products);