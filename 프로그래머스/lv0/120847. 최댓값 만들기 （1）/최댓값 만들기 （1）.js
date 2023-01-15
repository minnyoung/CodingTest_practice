function solution(numbers) {
    numbers.sort((a,b) => a - b)
    // return numbers[-1] * numbers[-2]
    return numbers.at(-1) * numbers.at(-2)

    // https://stackoverflow.com/questions/54066261/why-cant-i-do-array-1-in-javascript
    // array[-1] 결과가 왜 undefined가 나올까?
}