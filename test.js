/** Test variables' scope */
function f2() {
  myVar = 3;
  console.log('inside function: ' + myVar);
}

f2();

console.log('outside function: ' + myVar);
