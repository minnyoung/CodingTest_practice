function solution(arr) {
    const smallestNumber = [...arr].sort((a, b) => a - b)[0]
    return arr.length === 1 ? [-1] : arr.filter((number) => number !== smallestNumber)
}