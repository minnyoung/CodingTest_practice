function solution(s){
    let p = 0, y = 0;
    [...s].forEach((string) => {
         /[p]/i.test(string) ? p += 1 : /[y]/i.test(string) ? y += 1 : null
    })
        return p === y
         
    
     
    
}

