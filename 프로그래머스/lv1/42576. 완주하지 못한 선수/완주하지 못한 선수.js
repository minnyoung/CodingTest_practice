function solution(participant, completion) {
    // participant 참여자, completion 완주자
    // participant.sort()
    // completion.sort()
//     return participant
    
    // 테스트 케이스는 모두 통과하나 효율성 시간초과
    // completion.forEach((person) => {
    // if(participant.includes(person)) {
    //     participant.splice(participant.indexOf(person), 1)
    // }})
    // return participant.join("")

    // return participant.includes(completion)
    
    // 동명이인 있을경우 결과 찾아내지 못함
    // return participant.filter((person) => !completion.includes(person)).join('')
    // return participant.filter((person) => {
    //     if(participant.includes(person)) {
    //         return person
    //     } 
    // })
    
    // 효율성 시간은 나오는.... 왜 중간 테스트가 안먹지
    participant.sort()
    completion.sort()
    
    return participant.find((person, index) => person !== completion[index]
    )
    
//     const _participant = [...participant]
//     for(let i = 0;i < _participant.length;i++){
//         if(completion.includes(_participant[i])){
//             participant.splice(participant.indexOf(_participant[i]), 1)  
           
//     } 
//     } return participant
    
//     const _participant = [...participant]
//     for(let value of _participant){
//         if(completion.includes(value)) participant.splice(participant.indexOf(value), 1)  
//     } 
//     return participant.join("")

    // return participant.find((person) => !(completion.includes(person)))



}