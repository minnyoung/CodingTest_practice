function solution(rsp) {
    return [...rsp].map((string) =>  string === "2" ? "0" : string === "0" ? "5" :  "2").join('')
       
}