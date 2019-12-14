var anschooselist = [];
function ransu(num1) {

    var temp = Math.floor(Math.random() * Math.floor(num1));
    return temp;
}
window.onload = function () {
    for (i = 1; i < 101; i++) {
        anschooselist.push(i);
    }

    var bingocrct = [];
    for (i = 0; i < 101; i++) {
        num = ransu(anschooselist.length - 1);
        bingocrct.push(anschooselist[num]);
        anschooselist.splice(num, 1);
    }
}