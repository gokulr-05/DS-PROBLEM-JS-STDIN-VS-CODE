process.stdin.resume();
process.stdin.setEncoding("utf8");

// your code goes here

let s = "",
  testCases,
  no_of_input_per_test_case;
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

  arr[0] = parseInt(arr[0]);
  arr[1] = arr[1].split(" ").map((val) => {
    return parseInt(val);
  });

  //   console.log(arr);
  //   testCases = parseInt(arr[0]);
  //   no_of_input_per_test_case = 2;

  //   for (let i = 1; i < arr.length; ++i) {
  //     if (i % 2 !== 0) {
  //       arr[i] = parseInt(arr[i]);
  //     } else {
  //       let t = arr[i].split(" ");
  //       arr[i] = t.map((val) => {
  //         return parseInt(val);
  //       });
  //     }
  //   }

  //   main();
  main1();
});

function main1() {
  let n = parseInt(arr[0]);
  let tempArr = [...arr[1]];

  let oddCount = 0,
    evenCount = 0;

  for (let j = 0; j < tempArr.length; ++j) {
    if (tempArr[j] % 2 === 0) ++evenCount;
    else ++oddCount;
  }

  if (
    oddCount % 2 === 0 &&
    evenCount % 2 === 0 &&
    oddCount + evenCount === 2 * n
  ) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

// function main() {
//   for (
//     let i = 1;
//     i <= testCases * no_of_input_per_test_case;
//     i = i + no_of_input_per_test_case
//   ) {
//     let n = parseInt(arr[i]);
//     let tempArr = [...arr[i + 1]];

//     let oddCount = 0,
//       evenCount = 0;

//     for (let j = 0; j < tempArr.length; ++j) {
//       if (tempArr[j] % 2 === 0) ++evenCount;
//       else ++oddCount;
//     }

//     if (
//       oddCount % 2 === 0 &&
//       evenCount % 2 === 0 &&
//       oddCount + evenCount === 2 * n
//     ) {
//       console.log("YES");
//     } else {
//       console.log("NO");
//     }
//   }
// }
