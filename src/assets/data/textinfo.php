<?php
require "hawksdb.php";

$usertable = "sitetext";
$db = new HawksDB();

if (isset($_GET['name'])) {
    $name=$_GET['name'];
    $query = "SELECT title, text FROM $usertable WHERE name=$name";
    $callback = array($db, "output_one");
}
$db->DoSql($callback, $query);
?>