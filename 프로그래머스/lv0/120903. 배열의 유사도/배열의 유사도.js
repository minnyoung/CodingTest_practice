function solution(s1, s2) {
    return s1.filter((s1Element) => s2.includes(s1Element)).length
}