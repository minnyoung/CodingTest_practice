function solution(s) {
    const words = s.split(" ")
    return s.split(" ").map((word) => {
        const resultWord = []
        for(let i = 0;i < word.length;i++){
            if(i % 2) resultWord.push(word[i].toLowerCase())
            else resultWord.push(word[i].toUpperCase())
        } return resultWord.join("")
    }).join(" ")
}