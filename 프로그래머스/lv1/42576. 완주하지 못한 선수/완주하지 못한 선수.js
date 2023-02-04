function solution(participant, completion) {
    // participant 참여자, completion 완주자
    
    // 효율성 시간은 나오는.... 왜 중간 테스트가 안먹지
    participant.sort()
    completion.sort()
    
    return participant.find((person, index) => person !== completion[index]
    )


}