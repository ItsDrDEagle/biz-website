<?php

if(isset($_POST['kontaktiraj'])){
  $ime = $_POST['ime'];
  $prezime =$_POST['prezime'];
  $email = $_POST['email'];
  $poruka = $_POST['poruka'];

	mail('dimworks63@hotmail.com', $email, $poruka, "blabla");

}




 ?>
