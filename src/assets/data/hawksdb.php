<?php

class HawksDB
{
    //Variables for connecting to your database.
    //These variable values come from your hosting account.
    private $hostname = "hawksnet.db.8301406.7ff.hostedresource.net";
    private $username = "tdnordine";
    private $dbname = "hawksnet";
    private $password = "Hastings1@";

    function __construct()
    {
        $this->conn = new mysqli($this->hostname, $this->username, $this->password, $this->dbname);
        // Check connection
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        } 
        
    }

    public function DoSQL($callback, $query)
    {
        $result = $this->conn->query($query);
        if ($result) {
            $callback($result);
            mysqli_free_result($result);
        }
    }

    public function output_one($result)
    {
        if ($result)
        {
            echo json_encode($result->fetch_object());
        }        
    }

    public function output_one_image($result)
    {
        if ($result) {
            $output = $result->fetch_object();
            header('Content-Type: $output->mimetype');
            echo $output->image;
        }       
    }

    public function output_many($result)
    {
        $output = array();
        if ($result) {
            while($row = $result->fetch_object()) {
                $output[] = $row;
            }
        }
        header('Content-Type: application/json');
        echo json_encode($output);        
    }

}

function output_one($result)
{
    if ($result)
    {
        echo json_encode($result->fetch_object());
    }        
}

function output_one_image($result)
{
    if ($result) {
        $output = $result->fetch_object();
        header('Content-Type: $output->mimetype');
        echo $output->image;
    }       
}

function output_many($result)
{
    $output = array();
    if ($result) {
        while($row = $result->fetch_object()) {
            $output[] = $row;
        }
    }
    header('Content-Type: application/json');
    echo json_encode($output);        
}
