<?php
$conn_servidor  = 'localhost';
$conn_usuario = 'wpp_db';
$conn_senha = 'brKjExnOPG';
$conn_db = 'wpp_db';

define("DOMAIN", "/admin/");
define("LOCAL", "local");

try {
    $conn = new PDO("mysql:host=$conn_servidor;dbname=$conn_db", $conn_usuario, $conn_senha);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    $conn->exec("set names utf8");
} catch (PDOException $e) {
    echo $e->getMessage();
}

define("MAIN_DIR", $_SERVER['DOCUMENT_ROOT'] . '/');

if ($_POST || $_GET || $_COOKIE || $_REQUEST) {
	function stripslashes_deep($value)
	{
		$value = is_array($value) ? array_map('stripslashes_deep', $value) : stripslashes($value);
		return $value;
	}

	$_POST = array_map('stripslashes_deep', $_POST);
	$_GET = array_map('stripslashes_deep', $_GET);
	$_COOKIE = array_map('stripslashes_deep', $_COOKIE);
	$_REQUEST = array_map('stripslashes_deep', $_REQUEST);
}
