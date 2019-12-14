window.onload = function () {
    var jsonObj = sessionStorage.getItem("bingo");
    if (jsonObj == null) {
        var numlist = [];
        for (i = 1; i < 101; i++) {
            numlist.push(i);
        }
        // function ransu(num1,num2){
        //     if(num1>num2){
        //         var tmp=num2;
        //         num2=num1;
        //         num1=tmp;
        //     }
        //     var temp=Math.floor(Math.random()*(num2-num1))+num1;
        //     return temp;
        // }
        function ransu(num1) {

            var temp = Math.floor(Math.random() * Math.floor(num1));
            return temp;
        }
        var bingolist = [];
        for (i = 0; i < 25; i++) {
            num = ransu(numlist.length - 1);
            bingolist.push(numlist[num]);
            numlist.splice(num, 1);
        }
        bingolist[12] = 0;
        var bingo_col1 = bingolist.slice(0, 5);
        var bingo_col2 = bingolist.slice(5, 10);
        var bingo_col3 = bingolist.slice(10, 15);
        var bingo_col4 = bingolist.slice(15, 20);
        var bingo_col5 = bingolist.slice(20, 25);
        var bingo_axs1 = [];
        for (i = 0; i < 21; i += 5) {
            bingo_axs1.push(bingolist[i]);
        }
        var bingo_axs2 = [];
        for (i = 1; i < 22; i += 5) {
            bingo_axs2.push(bingolist[i]);
        }
        var bingo_axs3 = [];
        for (i = 2; i < 23; i += 5) {
            bingo_axs3.push(bingolist[i]);
        }
        var bingo_axs4 = [];
        for (i = 3; i < 24; i += 5) {
            bingo_axs4.push(bingolist[i]);
        }
        var bingo_axs5 = [];
        for (i = 4; i < 25; i += 5) {
            bingo_axs5.push(bingolist[i]);
        }
        var bingo_sl1 = [];
        for (i = 0; i < 26; i += 6) {
            bingo_sl1.push(bingolist[i]);
        }
        var bingo_sl2 = [];
        for (i = 4; i < 21; i += 4) {
            bingo_sl2.push(bingolist[i]);
        }
        var chkdt = {
            col1: bingo_col1,
            col2: bingo_col2,
            col3: bingo_col3,
            col4: bingo_col4,
            col5: bingo_col5,
            axs1: bingo_axs1,
            axs2: bingo_axs2,
            axs3: bingo_axs3,
            axs4: bingo_axs4,
            axs5: bingo_axs5,
            sl1: bingo_sl1,
            sl2: bingo_sl2
        };

        if (chkreload == false) {
            json = JSON.stringify(chkdt)
            sessionStorage.setItem('bingo', json);
            chkreload = true;
        }
        createtable();
    } else {
        createtable();
    }
}
