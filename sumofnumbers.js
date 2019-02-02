const testList = [1, 2, 3, 4];

function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

function sumRecursion(list, index) {
  if (index === list.length - 1) {
    return list[index];
  }
  return sumRecursion(list, index + 1) + list[index];
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; });
}

console.log(sumFor(testList));
console.log(sumWhile(testList));
console.log(sumRecursion(testList, 0));
console.log(sumTheSimpleWay(testList));
