const twice = (f, v) => f(f(v));
const add3 = (v) => v + 3;
twice(add3, 7);
