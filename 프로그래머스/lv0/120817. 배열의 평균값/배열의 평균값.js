function solution(numbers) {
    const arrayReduceValue = numbers.reduce((previous, current) => 
        previous + current
    , 0);
return arrayReduceValue / numbers.length
}