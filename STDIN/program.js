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
  main1();
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
    console.log("main=", h);
  }
};

let main1 = () => {
  let i, j, t1;
  let testcases = parseInt(arr[0]);
  // console.log("testcases=", testcases);
  let no_of_inputs_per_testcase = 2;

  for (
    t1 = 1;
    t1 <= testcases * no_of_inputs_per_testcase;
    t1 = t1 + no_of_inputs_per_testcase
  ) {
    let array = [...arr[t1 + 1]];

    let n = array.length;
    let stack = [];

    for (i = n - 1; i >= 0; --i) {
      if (i === n - 1) {
        let obj = {};
        obj["ele"] = array[i];
        obj["no_of_views"] = 0;
        obj["max_ind"] = i;
        obj["right_<_="] = false;
        stack.push(obj);
      } else {
        let prev_ele = stack.pop();
        let prev_ele_copy = { ...prev_ele };
        stack.push(prev_ele);

        let obj = {};

        if (prev_ele_copy["ele"] <= array[i]) {
          obj["right_<_="] = true;
        } else {
          obj["right_<_="] = false;
        }

        obj["ele"] = array[i];

        if (array[i] >= array[prev_ele_copy["max_ind"]]) {
          obj["max_ind"] = i;
        } else {
          obj["max_ind"] = prev_ele_copy["max_ind"];
        }

        if (i === obj["max_ind"] - 1) {
          obj["no_of_views"] = 1;
        } else {
          let sum;
          sum = 1 + parseInt(prev_ele_copy["no_of_views"]);

          if (prev_ele_copy["right_<_="] === true) {
            sum = sum - 1;
          }

          obj["no_of_views"] = sum;
        }
        stack.push(obj);
      }
    }
    // console.log(stack);

    let sol = [];

    for (let i = n - 1; i >= 0; --i) {
      let obj1 = stack[i];
      sol.push(obj1["no_of_views"]);
    }

    console.log("main1=", sol);
  }
};
