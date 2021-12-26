// HOC function
// const filter = (predective, xs) => xs.filter(predective);
// const is = (type) => (x) => Object(x) instanceof type;
// filter(is(Number), [0, 2, "cnderh", null]);

const add = (x, y) => x + y;
const countedSum = withCounter(add);
console.log(countedSum(2, 3));
console.log(countedSum(2, 1));
