function solution(num_list) {
    const resultList = []
    resultList.push(num_list.filter((number) => number % 2 === 0).length)
    resultList.push(num_list.filter((number) => number % 2 !== 0).length)
    return resultList
}