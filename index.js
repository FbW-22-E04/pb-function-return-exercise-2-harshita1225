// 1
// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
function vowel_count(str1) {
  let vowelCount = 0;
  let letters = str1.split("");
  console.log(letters);

  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === "a") {
      vowelCount++;
    }
    if (letters[i] === "e") {
      vowelCount++;
    }
    if (letters[i] === "i") {
      vowelCount++;
    }
    if (letters[i] === "o") {
      vowelCount++;
    }
    if (letters[i] === "u") {
      vowelCount++;
    }
  }
  return vowelCount;
}
console.log(vowel_count("The quick brown fox"));
console.log(
  vowel_count("she sells sea shells on the sea shore when the sun shines")
);
//2
// Write a JavaScript function that generates a string id (specified length) of random characters.
function makeid(l) {
  let randomstr = "";
  let mainstr =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < l; i++) {
    randomstr += mainstr.charAt(Math.floor(Math.random() * mainstr.length));
  }

  return randomstr;
}
console.log(makeid(8));
console.log(makeid(36));
console.log(makeid(12));

// 3
// Write a JavaScript program to pass a 'JavaScript function' as parameter.
function abc() {}

abc();
