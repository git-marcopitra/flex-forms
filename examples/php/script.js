function createAmenities() {
    if (window.XMLHttpRequest) {
        //code for IE7+, Firefox, Chrome and Opera
        xmlhttp = new XMLHttpRequest();
    }
    else {
        //code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
            alert(JSON.stringify(xmlhttp.responseText));
    }
    var url = "./backend/functions.php";
    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + JSON.stringify(fields));

}