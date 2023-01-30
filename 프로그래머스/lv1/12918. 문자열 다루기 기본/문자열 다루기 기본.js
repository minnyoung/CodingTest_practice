function solution(s) {
    if((s.length === 4 || s.length === 6) && ![...s].find((string) => /[a-z]/i.test(string))) return true
    return false
}