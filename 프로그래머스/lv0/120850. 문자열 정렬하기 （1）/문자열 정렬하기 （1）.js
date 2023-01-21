function solution(my_string) {
    return [...my_string]
        .filter((string) => {
          if (/([0-9])/g.test(string)) return string                                })
        .sort((a, b) => a - b)
        .map((string) => parseInt(string))
    
    // replace 방법 알아보기
    
}