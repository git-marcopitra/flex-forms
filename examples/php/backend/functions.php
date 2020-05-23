<?php
    $request = $_REQUEST['x'];
    $realy = json_decode($request);
    saveOnDB($realy);
    function saveOnDB($data) {
        print_r($data);
        //SomeCodeHereToPutThisMotherFuckinShitOnDatabase
    }
?>