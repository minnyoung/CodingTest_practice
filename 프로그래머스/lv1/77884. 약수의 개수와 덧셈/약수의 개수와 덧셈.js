function solution(left, right) {
    let 약수 = 0
    let 약수의합계 = 0
    
    while(left <= right){
        for(let i = 1;i <= left;i++){
            if(left % i === 0) 약수 += 1
        }

        약수 % 2 === 0 ? 약수의합계 += left : 약수의합계 -= left
        약수 = 0
        left += 1
    }
    
    return 약수의합계
    
}