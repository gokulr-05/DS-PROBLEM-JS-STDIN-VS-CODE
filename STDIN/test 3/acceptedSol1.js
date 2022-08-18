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

  let n = parseInt(arr.splice(0, 1)[0]);
  let array1 = arr.splice(0, n);
  let set1 = new Set(array1);
  let diff = n - set1.size;

  console.log(diff + "\n");
}
