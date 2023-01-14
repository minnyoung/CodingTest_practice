function solution(money) {
    const AMERICANO = 5500
    return [parseInt(money / AMERICANO), money - (parseInt(money / AMERICANO) * 5500 )]
}