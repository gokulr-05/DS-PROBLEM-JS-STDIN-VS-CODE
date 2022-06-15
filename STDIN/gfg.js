"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let input_line = readLine().split(" ");
    let s = input_line[0];
    let obj = new Solution();
    let ans = obj.reverseWords(s);
    console.log(ans);
  }
}

class Solution {
  //Function to reverse words in a given string.
  reverseWords(s) {
    let arr = s.split(".");
    let rev = arr.reverse();
    let str = rev.join(".");

    return str;
  }
}
