process.stdin.resume();
process.stdin.setEncoding("utf-8");

let s = "";
let arr = [];
process.stdin.on("data", (data) => {
  s = s.concat(data);
});

process.stdin.on("end", () => {
  arr = s
    .trim()
    .split("\n")
    .map((val) => {
      return val.trim();
    });

  let t = parseInt(arr[0]);

  for (let i = 1; i < arr.length; ++i) {
    if (i % 2 != 0) {
      arr[i] = parseInt(arr[i]);
    } else {
      arr[i] = arr[i].split(" ").map((val) => {
        return Number(val);
      });
    }
  }

  main();
});

let main = () => {
  let i,
    j,
    count = 0;
  let h = [];
  let testcases = parseInt(arr[0]);

  let no_of_inputs_per_testcase = 2;
  for (
    z = 1;
    z <= testcases * no_of_inputs_per_testcase;
    z = z + no_of_inputs_per_testcase
  ) {
    h = [];
    let arr1 = [...arr[z + 1]];
    let n1 = arr1.length;
    for (i = 0; i < n1; ++i) {
      count = 0;
      if (i < n1 - 1) {
        max = arr1[i + 1];
        ++count;
      }

      for (j = i + 2; j < n1; ++j) {
        if (arr1[j] > max) {
          ++count;
          max = arr1[j];
        }
      }

      h[i] = count;
    }
    console.log(h);
  }
};
