function solution(n) {
    const trit = n.toString(3)
    return parseInt([...trit].reverse().join(""), 3)
}