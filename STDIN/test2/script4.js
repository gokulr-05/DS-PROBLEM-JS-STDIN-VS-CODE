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
  console.log(arr);
}

function main() {
  prepareInput();
  let t = arr.splice(0, 1)[0];

  for (let i = 0; i < t; ++i) {
    let c = 0;
    let n = arr.splice(0, 1)[0];
    let array1 = arr.splice(0, n);
    array1.forEach((val, ind) => {
      if (val >= 1000) {
        ++c;
      }
    });

    // process.stdout.write(c + "\n");
    // console.log(c);
  }
  process.exit();
}
