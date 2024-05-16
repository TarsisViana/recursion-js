function fibs(n) {
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}

// console.log(fibs(8));

function fibsRec(n, arr = [0, 1]) {
  if (n == arr.length) {
    return;
  } else {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    fibsRec(n, arr);
  }
  return arr;
}
console.log(fibsRec(8));
console.log(fibsRec(5));
console.log(fibsRec(10));
