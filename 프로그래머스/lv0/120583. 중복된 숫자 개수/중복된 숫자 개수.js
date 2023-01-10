function solution(array, n) {
    let count = 0
   
    array.filter((ele) => {
        if(ele === n) count++
    })
    
    return count;
}