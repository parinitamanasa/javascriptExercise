var arr = [80,77,88,95,68];
var avg;
var sum = 0;
for(i = 0; i < arr.length; i++){
    sum = sum + arr[i];
}
avg = sum/(arr.length);
console.log(avg);
if(avg<60) 
console.log("F");
else if(avg<70 && avg>=60)    
console.log("D");
else if(avg<80 && avg>=70)  
console.log("C");
else if(avg<90 && avg>=80)  
console.log("B");
else console.log("A");
