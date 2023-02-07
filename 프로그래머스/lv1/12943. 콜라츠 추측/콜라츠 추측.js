function solution(num) {
    let count = 0
    for (let i = 1; i <= 500;i++){
        if(num === 1){
            break
        }
        
        if(!(num % 2)) {
            num /= 2
            count = i
        } else {
            num = (num * 3) + 1
            count = i
        }
    }
    
    return num === 1 ? count : -1
    

}