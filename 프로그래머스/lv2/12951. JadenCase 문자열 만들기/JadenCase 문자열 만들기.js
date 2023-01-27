function solution(s) {
    const words = s.split(" ")
    return words.map((word) => {
            if(word && /[a-z]/i.test(word[0])) {
              return [...word][0].toUpperCase() + word.slice(1).toLowerCase()
        } return word && word[0] + word.slice(1).toLowerCase()
    }).join(" ")

}
