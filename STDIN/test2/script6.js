process.stdin.resume();
process.stdin.setEncoding("utf8");

// your code goes here

process.stdin.on("data", cacheInput).on("end", main);

let s = "",
  arr = [];

function cacheInput(data) {
  s = s.concat(data);
}

function prepareInput() {
  arr = s.split(/\s+/).map((val) => {
    return parseInt(val);
  });
}

function main() {
  prepareInput();

  let testcase = arr.splice(0, 1)[0];

  for (let i = 0; i < testcase; ++i) {
    let count = 0;
    let n = arr.splice(0, 1)[0];
    let array1 = arr.splice(0, n);

    for (let z = 0; z < array1.length; ++z) {
      if (array1[z] < 0) array1[z] = 0;
    }

    for (let j = n - 2; j >= 0; --j) {
      while (array1[j] >= array1[j + 1] && array1[j] > 0) {
        --array1[j];
        ++count;
      }
    }

    // process.stdout.write(count + "\n");
    console.log(count + "\n");
  }
  process.exit();
}
