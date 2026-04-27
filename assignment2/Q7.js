let arr = [5, 4, 2, 1, 7, 6, 9, 8, 0, 0, 1, 4];
for (let i = 1; i < arr.length; i++) {
  let flag = true;
  for (let j = 0; j < arr.length - i; j++) {
    if (arr[j + 1] < arr[j]) {
      if (flag) flag = false;
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  if (flag) break;
}
console.log(arr);