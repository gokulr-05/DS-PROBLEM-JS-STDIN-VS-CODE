// process.stdout.write("Hello\tworld");
// // process.stdout.write("world");
// console.log("console");

// -----------------------------------------------------------------

// process.stdin.on("data", (data) => {
//   console.log(`Hi!! ${data.toString()}  How Are You...`);
// });

// process.stdin.on("exit", () => {
//   console.log("Program Ended");
// });

// --------------------------------------------------------

// process.stdin.on("readable", function () {
//   let d = process.stdin.read();
//   console.log(`d=${d} typeof d=${typeof d}`);
//   let d1 = process.stdin.read();
//   console.log(`d1=${d1} typeof d1=${typeof d1}`);
// });

// let count = 1,
//   testcases;
// let n,
//   s,
//   arr = [],
//   i,
//   j;
// process.stdin.on("readable", function () {
//   testcases = process.stdin.read();
//   ++count;

//   for (i = 1; i <= testcases; ++i) {
//     n = process.stdin.read();
//     s = process.stdin.read();
//     console.log("n=", n, "s=", s);
//   }
// });

// process.stdin.resume();
// process.stdin.setEncoding("utf8");

// process.stdin.on("readable", function () {
//   let d = process.stdin.read();
//   if (d) {
//     console.log(d);
//   }
//   // let d1 = process.stdin.read();
//   // if (d1) {
//   //   console.log(d1);
//   // }

//   for (let i = 1; i <= Number(d); ++i) {
//     let n = process.stdin.read();
//     let s = process.stdin.read();
//     console.log(n, s);
//   }
// });

// process.stdin.resume();
// process.stdin.setEncoding("utf8");

// let inp = [];

// process.stdin.on("data", (d) => {
//   inp.push(d.toString().replace(/(\r\n|\n|\r)/gm, ""));
// });

// process.stdin.on("end", () => {
//   console.log(inp);
// });

// ----------------------------------------------------------------------------

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let inputString = "";
// let currentLine = 0;

// process.stdin.on("data", (inputStdin) => {
//   inputString += inputStdin;
// });

// process.stdin.on("end", (_) => {
//   inputString = inputString
//     .trim()
//     .split("\n")
//     .map((string) => {
//       return string.trim();
//     });

//   main();
// });

// function readline() {
//   return inputString[currentLine++];
// }
// // Make a Snippet for the code above this and then write your logic in main();

// function main() {
//   const x = readline();
//   var line2 = readline();

//   foo(x);
//   foo(line2);
// }
// function foo(x) {
//   process.stdout.write("hello: "); // without auto '\n' (newline)
//   console.log(x); // with auto '\n' (newline)
// }

// ---------------------------------------------------------------------------------

// ---------------------------------------------------

// WORKING:

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let s = "";
// let arr = [];
// process.stdin.on("data", (data) => {
//   s = s.concat(data);
// });

// process.stdin.on("end", () => {
//   arr = s
//     .trim()
//     .split("\n")
//     .map((val) => {
//       return val.trim();
//     });

//   let t = parseInt(arr[0]);

//   for (let i = 1; i < arr.length; ++i) {
//     if (i % 2 != 0) {
//       arr[i] = parseInt(arr[i]);
//     } else {
//       arr[i] = arr[i].split(" ").map((val) => {
//         return Number(val);
//       });
//     }
//   }

//   main1();
// });

// let main = () => {
//   let i,
//     j,
//     count = 0;
//   let h = [];
//   let testcases = parseInt(arr[0]);

//   let no_of_inputs_per_testcase = 2;
//   for (
//     z = 1;
//     z <= testcases * no_of_inputs_per_testcase;
//     z = z + no_of_inputs_per_testcase
//   ) {
//     h = [];
//     let arr1 = [...arr[z + 1]];
//     let n1 = arr1.length;
//     for (i = 0; i < n1; ++i) {
//       count = 0;
//       if (i < n1 - 1) {
//         max = arr1[i + 1];
//         ++count;
//       }

//       for (j = i + 2; j < n1; ++j) {
//         if (arr1[j] > max) {
//           ++count;
//           max = arr1[j];
//         }
//       }

//       h[i] = count;
//     }
//     console.log(h);
//   }
// };

// let main1 = () => {
//   let i, j, t1;
//   let testcases = parseInt(arr[0]);
//   // console.log("testcases=", testcases);
//   let no_of_inputs_per_testcase = 2;

//   for (
//     t1 = 1;
//     t1 <= testcases * no_of_inputs_per_testcase;
//     t1 = t1 + no_of_inputs_per_testcase
//   ) {
//     let array = [...arr[t1 + 1]];

//     let n = array.length;
//     let stack = [];

//     for (i = n - 1; i >= 0; --i) {
//       if (i === n - 1) {
//         let array_ele = array[i];
//         let obj = {};
//         obj[array_ele] = 0;
//         obj["right_most_ele_less_eq_curr"] = false;

//         stack.push(obj);
//       } else {
//         let bool_val = false;
//         let popped_item = stack.pop();
//         let key1 = Object.keys(popped_item)[0];
//         let sum = 1 + popped_item[key1];
//         if (popped_item.right_most_ele_less_eq_curr === true) {
//           sum = sum - 1;
//         }

//         if (Number(key1) <= array[i]) {
//           bool_val = true;
//         }

//         stack.push(popped_item);
//         let array_ele = array[i];
//         let obj = {};
//         obj[array_ele] = sum;
//         obj["right_most_ele_less_eq_curr"] = bool_val;
//         // let obj = { array_ele: sum, right_most_ele_less_eq_curr: bool_val };
//         stack.push(obj);
//       }
//     }

//     // console.log("stack=", stack);

//     let sol = [];

//     for (let i = stack.length - 1; i >= 0; --i) {
//       let val = Number(Object.values(stack[i])[0]);
//       sol.push(val);
//     }

//     console.log(sol);
//   }
// };

// -------------------------------------------------------------------------------------

// AANYA AND MANYA TILES PROBLEM

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
    arr[i] = parseInt(arr[i]);
  }

  main1();
});

let main1 = () => {
  console.log("arr=", arr);

  let t1 = parseInt(arr[0]);
  let array1 = [];
  let i,
    j,
    k,
    sum = 0,
    mul = 1;

  let inc = () => {
    let last_num = array1[array1.length - 1];
    array1.shift();
    array1.push(last_num);
  };

  for (i = 1; i <= t1; ++i) {
    k = arr[i];

    if (k === 1) {
      console.log(1);
    } else if (k == 2) {
      console.log(23);
    } else {
      for (let i1 = 0; i1 < k; ++i1) {
        array1[i1] = i1 + 1;
        sum = sum + array1[i1];
        mul = mul * array1[i1];
      }

      while (sum > mul) {
        inc();
      }
      console.log(array1.join(""));
    }
  }
};
