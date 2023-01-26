function solution(s) {
    const maxNumber = Math.max(...s.split(" ").map((string) => +string)) 
    const minNumber = Math.min(...s.split(" ").map((string) => +string))
    return `${minNumber} ${maxNumber}`
}