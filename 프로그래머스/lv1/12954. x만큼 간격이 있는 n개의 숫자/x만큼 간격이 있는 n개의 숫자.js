function solution(x, n) {
    // x의 간격으로 n번 출력
    
    var answer = [];
    var number = 0;
    
    for (var i = 0;i < n;i++){
        number += x;
        answer.push(number);
    }
    
    
    return answer;
}