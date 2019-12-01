var anschooselist=[];
for(i=1;i<101;i++){
    anslist.push(i);
}
function ransu(num1){

    var temp=Math.floor(Math.random()*Math.floor(num1));
    return temp;
}
var anslist=[];
for(i=0;i<25;i++){
    num=ransu(numlist.length-1);
    anslist.push(numlist[num]);
    numlist.splice(num,1);
}