function createtable(){
    var table='<table class="table table-striped">'
table+="<tr>"
bingo_col1.forEach((value) => {
    table+="<td>"+value+"<td>"
})
table+="</tr>";
table+="<tr>"
bingo_col2.forEach((value) => {
    table+="<td>"+value+"<td>"
})
table+="</tr>";
table+="<tr>"
bingo_col3.forEach((value) => {
    table+="<td>"+value+"<td>"
})
table+="</tr>";
table+="<tr>"
bingo_col4.forEach((value) => {
    table+="<td>"+value+"<td>"
})
table+="</tr>";
table+="<tr>"
bingo_col5.forEach((value) => {
    table+="<td>"+value+"<td>"
})
table+="</tr>";
table+="</table>";
var bingotable=document.getElementById("bingotable")
bingotable.innerHTML=table
}