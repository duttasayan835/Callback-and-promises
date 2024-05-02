function d(arr, double) {
  let ne = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    let a = double(element);
    ne[i] = a;
  }
  return ne;
}
function double(element) {
  return element * 2;
}
arr = [1, 2, 3, 4, 5, 6];
console.log(d(arr, double));
