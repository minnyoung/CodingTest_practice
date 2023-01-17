function solution(n) {
    let resultNumberArray = []
    for (let i = 1;i<=n;i++){
        if(n % i === 0) resultNumberArray.push(i)
    }
    return resultNumberArray.length
}