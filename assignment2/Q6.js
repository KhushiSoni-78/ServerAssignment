let arr = [3, 5, 2, 1, 6, 4, 7, 9, 0, 8];
for (let i = 1; i < arr.length; i++) {
  let temp = i;
  while (temp > 0 && arr[temp] < arr[temp - 1]) {
    let x = arr[temp];
    arr[temp] = arr[temp - 1];
    arr[temp - 1] = x;
    temp--;
  }
}
console.log(arr);