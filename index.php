<?php
	$url = "../";
	
	ob_start();
	include("./main.php");
	$body = ob_get_contents();
	ob_end_clean();
	
	include($url."private/template.php");
	
?>