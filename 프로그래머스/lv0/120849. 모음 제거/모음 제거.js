function solution(my_string) {
    const VOWELS = ['a', 'e', 'i', 'o','u']
    return my_string.split('').filter((string) => 
!VOWELS.includes(string)).join("")
}