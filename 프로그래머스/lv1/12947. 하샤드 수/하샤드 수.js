function solution(x) {
    return x % [...x.toString()].reduce((acc, cur) => +acc + +cur, 0) ? false : true
}