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
  arr = s.split(/\s+/);
}

function main() {
  prepareInput();

  let testcase = parseInt(arr.splice(0, 1)[0]);

  for (let i = 0; i < testcase; ++i) {
    let c1 = 0,
      c2 = 0;
    let n = parseInt(arr.splice(0, 1)[0]);
    let array1 = arr.splice(0, n);

    for (let j = 0; j < array1.length; ++j) {
      if (array1[j] === "START38") ++c1;
      else if (array1[j] === "LTIME108") ++c2;
    }
    process.stdout.write(c1 + " " + c2 + "\n");
  }
  process.exit();
}
