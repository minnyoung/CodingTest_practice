function solution(arr){
    const answerArray = []
    arr.filter((number, idx) => {
        if(number !== arr[idx + 1]){
            answerArray.push(number)
        }}
    )
    return answerArray
}