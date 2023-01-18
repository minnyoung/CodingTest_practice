function solution(my_string) {
    return my_string.split("").filter((string) => /^[1-9]$/g.test(parseInt(string))).reduce((acc, cur) => acc + parseInt(cur),0)
    
}