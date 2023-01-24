function solution(seoul) {
    return `김서방은 ${seoul.map((name, index) => name === 'Kim' ? index : "").join("")}에 있다`
}