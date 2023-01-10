function solution(n)
{
    var answer = 0;
    var nArr = (n + "").split("")
    
    for (var i = 0;i < nArr.length;i++){
        answer += (nArr[i] * 1);
    }
    
    return answer;
}