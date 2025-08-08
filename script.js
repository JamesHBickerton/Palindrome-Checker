"use strict";

const checkBtn = document.getElementById("check-btn");
const searchBar = document.getElementById("text-input");
const result = document.getElementById("result");

function checkPalindrome() {
  if (searchBar.value.trim() === "") {
    alert("Please input a value");
  } else {
    const input = searchBar.value;
    const original = input.toLowerCase().replace(/[^a-z0-9]/g, "");

    const reversed = original.split("").reverse().join("");
    console.log(reversed);

    if (original === reversed) {
      result.textContent = `${input} is a palindrome.`;
      result.style.color = "#39FF14";
    } else {
      result.textContent = `${input} is not a palindrome.`;
      result.style.color = "#FF073A";
    }
  }
}

checkBtn.addEventListener("click", checkPalindrome);

searchBar.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkPalindrome();
  }
});
