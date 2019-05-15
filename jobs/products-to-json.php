<?php
    $dirs = array_filter(glob('*'), 'is_dir');
    $json = array();
    foreach ($dirs as $dir) {
        $filename = "{$dir}/productinfo.php";
        if (file_exists($filename)) {
            include_once($filename);
            $obj["name"] = $productname;
            $obj["image"] = $dir;
            $obj["description"] = $productdesc;
            $obj["type"] = "Pond Care";
            $obj["price"] = NULL;
            array_push($json, $obj);
        }
    }

    $file = fopen("output.json", "w");
    fwrite($file, json_encode($json));
    fclose($file);
?>