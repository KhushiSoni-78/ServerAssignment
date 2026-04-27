let arr = [3, 2, 2, 12, 4, 5, 2, 65, 7, 5, 3];
let target = 2;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == target) {
    console.log(i);
    break;
  }
}