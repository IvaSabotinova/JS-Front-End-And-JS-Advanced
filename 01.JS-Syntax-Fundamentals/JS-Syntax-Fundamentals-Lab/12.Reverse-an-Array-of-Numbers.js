function solve(n, inputArray){
let resultArray = [];
for (let index = 0; index < n; index++) {
   resultArray.push(inputArray[index]);
}
resultArray.reverse()
console.log(resultArray.join(' '));
}

solve(3, [10, 20, 30, 40, 50])
solve(4, [-1, 20, 99, 5])
solve(2, [66, 43, 75, 89, 47])