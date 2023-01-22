function solution(n) {
    let resultArray = []
    n.toString().split("").forEach((string) => resultArray.unshift(string))
    return resultArray.map((string) => +string)
}