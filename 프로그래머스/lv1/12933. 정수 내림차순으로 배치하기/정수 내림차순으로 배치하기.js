function solution(n) {
    //var answer = 0;

    var number = String(n).split("");
    var sortNumber = number.sort(function compare(a, b){
        return b - a;
    });
    
    return Number(sortNumber.join(""));
}
