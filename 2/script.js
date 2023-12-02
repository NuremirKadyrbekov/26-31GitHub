function reverseString(str) {
    return str.split('').reverse().join('');
}

var originalString = "Нурэмир";
var reversedString = reverseString(originalString);

console.log(reversedString);