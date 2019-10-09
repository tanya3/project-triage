<?php
use Ramsey\Uuid\Uuid;
// Step 0: Validate data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();      //:: indicates that its a static function

// Step 2: Prepare & run the query
$stmt = $db->prepare(
  'INSERT INTO Patient
  (patientGuid, firstName, lastName, dob, sexAtBirth)
  VALUES (?,?,?,?,?)'
);      //$db is a method of PHP's PDO (Persistent Data Object) class (masked by DbConnection class) and prepare is a function of PDO that returns a PDOStatement object.

//$_POST associative array for data that's posted
// $_GET associative array of data received
// $_ENV associative array of environment variables
// $_SERVER associative array of returned server details

$guid = Uuid::uuid4()->toString();

$stmt->execute([
  $guid,                              // i.e. 25769c6c-d34d-4bfe-ba98-e0ee856f3e7a
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['dob']
  $_POST['sexAtBirth']
]);                                   //$stmt object executes the query and the $stmt object references to the result set

// Step 3: Output
header('HTTP/1.1 303 See Other');
header('Location: ../records/?guid='.$guid);
