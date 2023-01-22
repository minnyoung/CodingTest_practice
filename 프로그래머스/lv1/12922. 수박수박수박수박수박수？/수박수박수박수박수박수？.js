function solution(n) {
    if(!n) return '수'
    else if(!(n % 2)){ // 짝수
        return '수박'.repeat(n / 2)
    }
    else {
        return '수박'.repeat(n / 2) + "수"
    }
}