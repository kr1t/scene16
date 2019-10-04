
<?php

include_once("config.php");

use Josantonius\Ip\Ip;
use Jenssegers\Agent\Agent;

$agent = new Agent();



include_once("user.php");


$request = $_REQUEST;
$request =  (object) $request;

$d = $database->insert('video_clicks', [
	'user_id' =>  $set_name,
	'video_id' => $request->video_id,
]);
echo 'view video id : ' . $request->video_id;
?>