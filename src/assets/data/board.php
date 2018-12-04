<?php
require "hawksdb.php";

$usertable = "boardmembers";
$db = new HawksDB();

$query = "SELECT id, title, name, emailaddr, termexpiration, image, shorttitle FROM $usertable WHERE current = 1";
$callback = "output_many";

$db->DoSql($callback, $query);
?>