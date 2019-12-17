window.onload = function () {
    var chooser=ransu(2);
    if(chooser===0){
        chosenAnsList=ansList1;
    }else if(chooser===1){
        chosenAnsList=ansList2;
    }else{
        chosenAnsList=anslist3;
    }

    for (i = 1; i < 101; i++) {
        randomlist.push(i);
    }
     lastRandList=randomlist

for(i=0;i<randomlist.length;i++){
    var temp=lastRandList[i]
    for (j=0;j<chosenAnsList.length;j++){
        var tempj=chosenAnsList[j]
        if(temp==tempj){
            delete lastRandList[i];
            
        }
        
    }

}
lastRandList= lastRandList.filter(v => v)

}