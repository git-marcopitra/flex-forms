window.onload = function () {
    xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
            alert(JSON.stringify(xmlhttp.responseText));
    }
    var url = "./backend/getData.php";
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
function sendData() {
    xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    
    xmlhttp.onreadystatechange = () => {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
            alert(JSON.stringify(xmlhttp.responseText));
    }
    var url = "./backend/sendData.php";
    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + JSON.stringify(fields));

}