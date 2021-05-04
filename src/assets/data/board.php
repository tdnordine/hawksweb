<?php
require "hawksdb.php";

$usertable = "boardmembers";
$db = new HawksDB();

$query = "SELECT id, title, name, emailaddr, termexpiration, image, shorttitle FROM $usertable WHERE current = 1 ORDER BY FIELD(shorttitle, 'pres', 'vp', 'treas', 'sec', 'manager', 'amanager', 'atlarge1', 'atlarge2', 'atlarge3', 'atlarge4')";
$callback = "output_many";

$db->DoSql($callback, $query);
?>