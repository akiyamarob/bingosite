function createtable(){
    val=JSON.parse(json)
    var col1=val.col1
    var col2=val.col2
    var col3=val.col3
    var col4=val.col4
    var col5=val.col5
    var table='<table>'
table+="<tr>"
col1.forEach((value) => {
    table+="<td>"+value+"<td>"
})
table+="</tr>";
table+="<tr>"
col2.forEach((value) => {
    table+="<td>"+value+"<td>"
})
table+="</tr>";
table+="<tr>"
col3.forEach((value) => {
    table+="<td>"+value+"<td>"
})
table+="</tr>";
table+="<tr>"
col4.forEach((value) => {
    table+="<td>"+value+"<td>"
})
table+="</tr>";
table+="<tr>"
col5.forEach((value) => {
    table+="<td>"+value+"<td>"
})
table+="</tr>";
table+="</table>";
var bingotable=document.getElementById("bingotable")
bingotable.innerHTML=table
}
