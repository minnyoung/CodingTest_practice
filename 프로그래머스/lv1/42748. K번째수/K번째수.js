function solution(array, commands) {
    const resultArray = []
    
    commands.forEach((command) => {
      const [firstNumber, lastNumber, index] = command
      
      resultArray.push(array.slice(firstNumber - 1, lastNumber).sort((a, b) => a - b)[index - 1])
        
    })
    return resultArray
}