function solution(my_string, n) {
    const resultString = []
    my_string
        .split("")
        .map((string) => {
            for(let i = 0;i<n;i++) resultString.push(string) }
            )
    return resultString.join("")
}
