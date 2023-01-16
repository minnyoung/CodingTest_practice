function solution(i, j, k) {
    let result = 0
    for(let number = i;number <= j;number++){
        result += number.toString().split('').filter((element) => parseInt(element) === k).length
    }
    return result
}