<?php


$post_data = file_get_contents("php://input");
$data = json_decode($post_data);


//saving to database
//save query

//now i am just printing the values
$result = array();
foreach ($data as $key => $value) {
    $result[$key] = $value;
}
print_r($result);

?>


