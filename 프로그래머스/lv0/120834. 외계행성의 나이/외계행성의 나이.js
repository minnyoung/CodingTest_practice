function solution(age) {
    return age.toString()
        .split("")
        .map((string) => String.fromCharCode("a".charCodeAt() + +string))
        .join("")
}