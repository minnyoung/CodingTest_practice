function solution(s, n) {
    const zCharCode = "z".charCodeAt()
    const ZCharCode = "Z".charCodeAt()
    
    return [...s].map((string) => {
        const stringPlusN = string.charCodeAt() + n
        if(/[a-z]/g.test(string)) {
            if(stringPlusN > zCharCode) return String.fromCharCode("a".charCodeAt() - 1 + stringPlusN - zCharCode)
            return String.fromCharCode(stringPlusN)
        } else if(/[A-Z]/g.test(string)){
            if(stringPlusN > ZCharCode) return String.fromCharCode("A".charCodeAt() - 1 + stringPlusN - ZCharCode)
            return String.fromCharCode(stringPlusN)
        }
    return string
    }).join("")
     
 
    
}