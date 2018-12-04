<?php
require "hawksdb.php";

$usertable = "sponsors";
$db = new HawksDB();

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $query = "SELECT image FROM $usertable WHERE id=$id";
    $callback = "output_one_image";

} else {
    $query = "SELECT title, id FROM $usertable WHERE enable=1";
    $callback = "output_many";
}

$db->DoSql($callback, $query);

?>