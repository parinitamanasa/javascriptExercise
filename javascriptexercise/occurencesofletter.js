var count = 0;
var pos;
var str = "gmail.com";
var ch = "m";
for(pos = 0; pos < str.length; pos++)
{
    if(str.charAt(pos) == ch)
    count++;
}
console.log(count);