function solution(hp) {
    const jangGun = parseInt(hp / 5)
    const byungJung = parseInt((hp - jangGun * 5) / 3)
    const ilAnt = hp - (jangGun * 5 + byungJung * 3)
    
    return jangGun + byungJung + ilAnt
}