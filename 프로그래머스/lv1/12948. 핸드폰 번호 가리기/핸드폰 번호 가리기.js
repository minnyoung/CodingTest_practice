function solution(phone_number) {
    return [...phone_number].map((number, idx) => 
        idx < phone_number.length - 4 ? "*" : number).join("")
}