function solution(cipher, code) {
    return cipher.split('').filter((string, index) => {
        if((index + 1) % code === 0) return string  
    }).join('')
}