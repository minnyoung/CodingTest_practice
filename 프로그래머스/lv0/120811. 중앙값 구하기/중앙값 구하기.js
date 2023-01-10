function solution(array) {
  array.sort((a,b)=>a-b);
  if (array.length % 2 === 0) {
    return array[parseInt(array.length / 2) + 1];
  } else {
    return array[parseInt(array.length / 2)];
  }
}