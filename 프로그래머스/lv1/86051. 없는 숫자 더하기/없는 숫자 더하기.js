function solution(numbers) {
    const zeroNineArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    numbers.forEach((number) => {
        zeroNineArray.indexOf(number) ? zeroNineArray.splice(zeroNineArray.indexOf(number), 1) : null
    })
    return zeroNineArray.reduce((acc, cur) => acc + cur, 0)
}