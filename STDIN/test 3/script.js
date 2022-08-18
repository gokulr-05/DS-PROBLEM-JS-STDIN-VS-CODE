process.stdin.resume();
process.stdin.setEncoding("utf8");

// your code goes here

process.stdin.on("data", catchInput).on("end", main);

let s = "";
let arr = [];

function catchInput(data) {
  s = s.concat(data);
}

function prepareInput() {
  arr = s.split(/\s+/).map((val) => {
    return parseInt(val);
  });
}

function main() {
  prepareInput();
  let count = 0;

  let n = parseInt(arr.splice(0, 1)[0]);
  let array1 = arr.splice(0, n);

  let i = 0;
  while (i < array1.length) {
    if (array1.lastIndexOf(array1[i]) !== i) {
      //   console.log(array1[i]);
      ++count;
      array1.splice(array1.lastIndexOf(array1[i]), 1);
      array1.splice(i, 1);
    } else {
      ++i;
    }
  }
  console.log(count + "\n");
}
