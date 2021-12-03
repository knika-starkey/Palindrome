let arr = [
  "А роза упала на лапу Азора",
  "Ого",
  "А Собака боса",
  "Привет, мир",
  "А Собака боса",
  "Лёша на полке клопа нашёл",
  "Я — арка края",
];

let result = arr.filter(checkPalindrome);
for (let i = 0; i < result.length; i++) {
  document.write(result[i] + "<br>");
}

function checkPalindrome(str) {
  let newstr = str.toLowerCase();
  newstr = newstr.replace(/[^a-zа-яё]/gi, "");
  let ansver = 1;
  for (let i = newstr.lenght; i > 0; i--) {
    if (newstr.charAt(i) === newstr.charAt(newstr.lenght - i)) ansver = 1;
    else ansver = 0;
  }
  return ansver == 0 ? false : true;
}
