function solution(s) {
    if(s.length % 2){ // 문자열 길이 홀수일 때
         return s[Math.floor(s.length / 2)]
    } return  [...s].slice((s.length / 2) - 1, (s.length / 2) + 1).join("")
}