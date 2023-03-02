function solution(my_str, n) {
    const resultArray = []
    for(let i = 0;i < my_str.length;i = i+n){
        resultArray.push(my_str.slice(i, i+n))
    }
    return resultArray
}