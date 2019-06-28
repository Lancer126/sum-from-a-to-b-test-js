
function sum(fromN, toN) {
  let sum1 = 0;
  if(fromN <= toN){
    sum1 += fromN + sum(fromN + 1, toN);
  }
  return sum1;
}

module.exports = sum;
