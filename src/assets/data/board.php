<?php
require "hawksdb.php";

$usertable = "boardmembers";
$db = new HawksDB();

$query = "SELECT title, termexpiration, name, emailaddr FROM $usertable WHERE current = 1";
$callback = array($db, "output_many");

$db->DoSql($callback, $query);
?>