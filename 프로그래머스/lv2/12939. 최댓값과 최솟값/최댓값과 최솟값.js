function solution(s) {
    const maxNumber = Math.max(...s.split(" ")) 
    const minNumber = Math.min(...s.split(" "))
    
    return `${minNumber} ${maxNumber}`
}