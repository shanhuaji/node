<?php

    $a=$_GET["a"];
    $b=$_GET["b"];
    $fn=$_GET["qwe"];
    $data=array("name"=>$a,"age"=>$b);
    $c=json_encode($data);
   
    // echo $fn."('".$c."')"
    echo "$fn($c)"
?>