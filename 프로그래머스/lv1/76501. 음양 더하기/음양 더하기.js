function solution(absolutes, signs) {
    return absolutes.map((number, index) => signs[index] ? number : -number).reduce((acc, cur) => acc + cur, 0)
}