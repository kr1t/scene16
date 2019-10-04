<?php
require 'vendor/autoload.php';

// Using Medoo namespace
use Medoo\Medoo;

// Initialize
// $database = new Medoo([
// 	'database_type' => 'mysql',
// 	'database_name' => 'fwd',
// 	'server' => 'localhost',
// 	'username' => 'root',
// 	'password' => 'root'
// ]);

$database = new Medoo([
	'database_type' => 'mysql',
	'database_name' => 'admin_fwd',
	'server' => 'localhost',
	'username' => 'admin_fwd',
	'password' => '4I17a4BB'
]);


$x = $database->select('reviews', '*');

echo json_encode($x);
