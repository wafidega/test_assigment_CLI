function removeDuplicate(n) {
  let uniqueChars = [...new Set(n)];
  return uniqueChars;
}

console.log(removeDuplicate([1, 3, 3, 1, 5, 6, 7, 8, 1]));
