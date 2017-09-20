<script>   //script for the 2nd table

function mytable() {
// Set the htmlOutput variable to a string that contains an HTML table

 var htmlOutput = "";
htmlOutput += "<table border='2'>";
htmlOutput += "<tr><th>Number</th>    <th>Square</th> <th>Cube</th> </tr>";
htmlOutput += "<tr align=\"right\"><td>" + 7 +   "</td>" + "<td>" + Math.pow(7, 2) + "</td>" + "<td>" + Math.pow(7, 3) + "</td></tr>";
htmlOutput += "<tr align=\"right\"><td>" + 8 +   "</td>" + "<td>" + Math.pow(8, 2) + "</td>" + "<td>" + Math.pow(8, 3) + "</td></tr>")
htmlOutput += "<tr align=\"right\"><td>" + 9 +   "</td>" + "<td>" + Math.pow(9, 2) + "</td>" + "<td>" + Math.pow(9, 3) + "</td></tr>")
htmlOutput += "<tr align=\"right\"><td>" + 10 +   "</td>" + "<td>" + Math.pow(10, 2) + "</td>" + "<td>" + Math.pow(10, 3) + "</td></tr>")
htmlOutput += "</table>"

  document.getElementById("myTable2").innerHTML = htmlOutput;
}


function hide() {

document.getElementById("myTable2").innerHTML = "";

}



</script>
