function solution(arr1, arr2) {
    return arr1.map((array, index) => {
        for(let i = 0;i < array.length;i++){
            array[i] = array[i] + arr2[index][i]
        } 
        return array
    })
}