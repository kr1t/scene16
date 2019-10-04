<?php
function getName($n)
{
	$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	$randomString = '';

	for ($i = 0; $i < $n; $i++) {
		$index = rand(0, strlen($characters) - 1);
		$randomString .= $characters[$index];
	}

	return $randomString;
}


$expire = 6 * 30 * 24 * 3600;
$cookie_name = 'user_id';

$set_name = time() . '-' . getName(3);
if (!isset($_COOKIE[$cookie_name])) {
	setcookie($cookie_name, $set_name, time() + $expire);
} else {
	$set_name = $_COOKIE[$cookie_name];
}
