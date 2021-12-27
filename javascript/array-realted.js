1.
var count = [1, , 3];
console.log(count); // [1, undefined, 3]
2.
var a1 = [, , ,];
var a2 = new Array(3);
0 in a1;
0 in a2;
console.log(a1); // [undefined, undefined, undefined] //true false
console.log(a2); // [undefined, undefined, undefined] //true false

3.
if (!a[i]) continue ;
// What is an observation made ?
// A. Skips the undefined elements

// B. Skips the non existent elements

// C. Skips the null elements

4. 
var a = []; 
a.unshift(1); 
a.unshift(22);
a.shift(); 
a.unshift(3,[4,5]); 
a.shift(); 
a.shift();
a.shift();
Ans = 1;
// The final output for the shift() is
//The unshift() and shift() methods behave much like push() and pop(),
// except that they insert and remove elements from the beginning of
// an array rather than from the end. unshift() adds an element or 
//elements to the beginning of the array, shifts the existing 
//array elements up to higher indexes to make room, and returns the 
//new length of the array. shift() removes and returns the first 
//element of the array, shifting all subsequent elements down one place 
//to occupy the newly vacant space at the start of the array

5. 
// The reduce and reduceRight methods follow a common operation called
Ans // inject and fold