<?php

try{
    //host
    define("HOST","localhost");

    //dbname
    define("DBNAME", "Genius");

    //user
    define("USER","root");

    //password
    define("PASSWORD","");

    $conn = new PDO("mysql:host=".HOST.";dbname=".DBNAME."",USER, PASSWORD);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // if($conn == true){
    //     echo "db connection is success";
    // }   
    // else{
    //     echo "error";
    // }
} catch( PDOException $Exception){
    echo $Exception->getMessage( );
}