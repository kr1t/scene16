<?php

include("config.php");

use Ramsey\Uuid\Uuid;
use Illuminate\Http\Request;
use Josantonius\Ip\Ip;
use Jenssegers\Agent\Agent;

$agent = new Agent();
$uuid1 = Uuid::uuid1();

$expire = 6 * 30 * 24 * 3600;
$cookie_name = 'user_id';

if (!isset($_COOKIE[$cookie_name])) {
	setcookie($cookie_name, $uuid1->toString() . "\n", time() + $expire);
}

$request = $_REQUEST;
$request =  (object) $request;

$d = $database->insert('reviews', [
	'user_id' => $_COOKIE[$cookie_name],
	'score' => $request->score,
	'ip_address' => Ip::get(),
	'device' => $agent->device(),
	'platform' => $agent->platform()
]);
echo 'success';
