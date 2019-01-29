var arr = [5, [22], [[14]], [[4]],[5,6]];
var str = arr.toString().split(",");
console.log(str);
console.log(str.map(Number));