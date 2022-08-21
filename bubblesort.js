//Bubble sort
function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        console.log("swapped");
        swapped = true;
        console.log("completed");
      }
    }
  } while (swapped === true);

  console.log(arr);
  return arr;
}

let arry = [1, 2, 3];

bubbleSort(arry);
