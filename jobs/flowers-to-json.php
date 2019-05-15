<?php

    $slug = "flowerinfo copy ";
    $data = NULL;

    for ($x = 0; $x <= 179; $x++) {
        $file = "./{$slug}{$x}.php";
        include_once($file);
        $obj["name"] = $flowername;
        $obj["id"] = $flowernumber;
        $obj["type"] = $flowertype;
        $obj["description"] = $flowerdesc;
        $data[$flowernumber] = $obj;
    } 
    $output = fopen("output.json", "w");
    fwrite($output, json_encode($data));
    fclose($output);

?>