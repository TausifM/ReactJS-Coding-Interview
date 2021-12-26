const buf1 = Buffer.alloc(10);
console.log(buf1);
const buf2 = Buffer.alloc(10);
count = buf2.write("Tausif"); // 6
console.log("Octets written" + count);

// it used to represent binary data in the form of sequence bytes.
// it use beacause javascript doesnot handle binary data very well
// it is great with unicode-encoded strings.
