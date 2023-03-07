function solution(box, n) {
    let lengthDivideN = 1
    box.forEach((length) => 
                lengthDivideN *= Math.floor(length / n)
               )
    return lengthDivideN
}