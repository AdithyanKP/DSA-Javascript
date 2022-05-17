//value and reference//

let a = [1, 2]; //<0.02> memmory location//
let b = [2, 3];
add(a, 4);
console.log(a);
function add(obj, value) {
  obj = [value];
  console.log(obj);
}
