function solution(price, money, count) {
    let totalPrice = 0
    for(let i = 0;i <= count;i++){
        totalPrice += price * i
    }
    return totalPrice - money > 0 ? Math.abs(totalPrice - money) : 0
}