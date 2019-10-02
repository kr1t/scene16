<?php

include("config.php");

use Ramsey\Uuid\Uuid;

$uuid1 = Uuid::uuid1();

$expire = 6 * 30 * 24 * 3600;
$cookie_name = 'user_id';

if (!isset($_COOKIE[$cookie_name])) {
	setcookie($cookie_name, $uuid1->toString() . "\n", time() + $expire);
}


$database->insert('reviews', [
	'user_name' => $_COOKIE[$cookie_name],
	'email' => 'foo@bar.com'
]);

// echo $uuid1->toString() . "\n";
