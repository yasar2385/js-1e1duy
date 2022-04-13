// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var arr2 = ['a', 'b', 'c', 'd', 'e', 'f'];
var arr = arr2.splice(0, arr2.indexOf('c'));
console.log(arr2);
console.log(arr);

var arr = [];
var count = 0;
var size = 30;
var obj = {};
var arrayOfArrays = [];
while (count < 150) {
  arr.push(count);
  count++;
}
if (count > 30) {
  for (var i = 0; i < arr.length; i += size) {
    console.log(i);
    arrayOfArrays.push(arr.slice(i, i + size));
    if (!obj['split' + i]) obj['split' + i] = [];    
    obj['split' + i]['push'](arr.slice(i, i + size));
    console.log(obj['split'+i]);
  }
} else {
  appDiv.appendChild(arr);
}

console.log(arr.length);
console.log(arrayOfArrays);
