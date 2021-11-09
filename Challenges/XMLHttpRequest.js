var xhttp = new XMLHttpRequest();

xhttp.onload = function() {
console.log("response is ready")
}

xhttp.open("GET", "ajax_info.txt");
xhttp.send();