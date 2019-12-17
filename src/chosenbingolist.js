window.onload = function () {
    var chooser = ransu(2);
    if (chooser === 0) {
        chosenAnsList = ansList1;
    } else if (chooser === 1) {
        chosenAnsList = ansList2;
    } else {
        chosenAnsList = anslist3;
    }

    for (i = 1; i < 101; i++) {
        randomlist.push(i);
    }
    lastRandList = randomlist

    for (i = 0; i < randomlist.length; i++) {
        var temp = lastRandList[i]
        for (j = 0; j < chosenAnsList.length; j++) {
            var tempj = chosenAnsList[j]
            if (temp == tempj) {
                delete lastRandList[i];

            }

        }

    }
    lastRandList = lastRandList.filter(v => v)
    chosenLength = lastRandList.length + chosenAnsList.length;
    for (i = 0; i < chosenLength; i++) {
        var randomer = ransu(10);
        if (randomer < 0) {
            randomer = 0;
        }
        if (randomer > 5) {
            var num = ransu(lastRandList.length - 1);
            bingocrct.push(lastRandList[num]);
            lastRandList.splice(num, 1);
            // こっちがランダムな数を出す
        } else {
            var num = ransu(chosenAnsList.length - 1);
            if (chosenAnsList.length == 0) {
                var num = ransu(lastRandList.length - 1);
                bingocrct.push(lastRandList[num]);
                lastRandList.splice(num, 1);
            } else {
                bingocrct.push(chosenAnsList[num]);
                chosenAnsList.splice(num, 1);
            }
        }
    }
}