function solution(s) {
    const array = s.split(" ")
    return array.reduce((acc, cur, index) => {
        if(cur === "Z") {
           return acc - +(array[index-1])
        } return acc + +cur
    }, 0)
}