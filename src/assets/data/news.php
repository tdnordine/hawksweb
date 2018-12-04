<?php
require "hawksdb.php";

$usertable = "news";
$db = new HawksDB();

if (isset($_GET['id'])) {
    $id=$_GET['id'];
    $query = "SELECT * FROM $usertable WHERE id=$id";
    $callback = "output_one";
} else {
    $query = "SELECT title, id, newsdate, byline FROM $usertable ORDER BY id DESC";
    $callback = "output_many";
}

$db->DoSql($callback, $query);
?>