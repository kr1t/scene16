
<?php

include_once("config.php");

use Josantonius\Ip\Ip;
use Jenssegers\Agent\Agent;

$agent = new Agent();

include_once("user.php");

$request = $_REQUEST;
$request =  (object) $request;
// var_dump($request);
$d = $database->insert('reviews', [
	'user_id' =>  $set_name,
	'score' => $request->score,
	'ip_address' => Ip::get(),
	'device' => $agent->device(),
	"utm_source" => $request->utm_source,
	"utm_medium" => $request->utm_medium,
	"utm_campaign" => $request->utm_campaign,
	"utm_term" => $request->utm_term,
	"utm_content" => $request->utm_content,
	'platform' => $agent->platform()
]);
echo 'ประเมินสำเร็จ ขอบคุณที่ใช้บริการ';
?>