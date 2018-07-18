
<?php
//Variables for connecting to your database.
//These variable values come from your hosting account.
$hostname = "hawksnet.db.8301406.7ff.hostedresource.net";
//$hostname = "localhost:3306";
$username = "tdnordine";
$dbname = "hawksnet";

//These variable values need to be changed by you before deploying
$password = "Hastings1!";
$usertable = "news";

//Connecting to your database
mysql_connect($hostname, $username, $password) OR DIE ("Unable to
connect to database! Please try again later.");
mysql_select_db($dbname);

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $query = "SELECT * FROM $usertable WHERE id=$id";

    //Fetching from your database table.
    $result = mysql_query($query);
    if ($result) {
        $output = mysql_fetch_object($result);
}

} else {
    $query = "SELECT title, id, newsdate, byline FROM $usertable";

    //Fetching from your database table.
    $result = mysql_query($query);
    $output = array();

    if ($result) {
        while($row = mysql_fetch_object($result)) {
            $output[] = $row;
        }
    }
}

echo json_encode($output);
?>