function solution(my_string) {
    return my_string.split('').map((string) => 
        /[a-z]/g.test(string) ? string.toUpperCase() : string.toLowerCase()).join('')}