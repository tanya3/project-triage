<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();      //:: indicates that its a static function

// Step 2: Create & run the query
$stmt = $db->prepare('SELECT * FROM Patient');      //$db is a method of PHP's PDO (Persistent Data Object) class (masked by DbConnection class) and prepare is a function of PDO that returns a PDOStatement object.
$stmt->execute();                                   //$stmt object executes the query and the $stmt object references to the result set
$patients = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($patients, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');           //PHP is designed for requests over http. header() tells the browser that it's JSON and not html. Sends MIME type for JSON.
echo $json;
