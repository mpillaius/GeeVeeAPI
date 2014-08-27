<?php
include '../class.geeveeapi.php';

$geevee = new GeeVeeSMS("YOUR EMAIL", "YOUR PASSWORD");

$geevee->call($_POST['number'], 'YOUR PHONENUMBER THAT YOU WANT TO USE TO DIAL');

?>
