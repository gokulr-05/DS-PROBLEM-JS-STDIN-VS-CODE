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
  let summ = 0;

  let n = parseInt(arr.splice(0, 1)[0]);
  let array1 = arr.splice(0, n);

  let i = 0;
  while (i < array1.length) {
    if (array1.lastIndexOf(array1[i]) !== i) {
      ++count;
      array1.splice(array1.lastIndexOf(array1[i]), 1);
      array1.splice(i, 1);
    } else {
      ++i;
    }
  }

  let j = 0;
  let count1 = 0;

  while (j < array1.length) {
    let f = 0;
    for (let k = j + 1; k < array1.length; ++k) {
      if ((array1[j] + array1[k]) / 2 === (array1[j] & array1[k])) {
        ++count1;
        array1.splice(k, 1);
        array1.splice(j, 1);
        f = 1;
        break;
      }
    }

    if (f === 0) ++j;
  }
  summ = count + count1;
  console.log(summ + "\n");
}
