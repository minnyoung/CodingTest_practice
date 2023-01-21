function solution(numbers, direction) {
    if(direction === 'left') {
        const leftArray = numbers.slice(1)
        leftArray.push(numbers[0])
        return leftArray
    } else {
        const rightArray = numbers.slice(0,-1)
        rightArray.unshift(numbers[numbers.length - 1])
        return rightArray}
}