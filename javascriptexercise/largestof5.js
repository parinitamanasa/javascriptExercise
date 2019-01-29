function getlargest(){
    var arr = [56,74,23,34,43];
    var max = arr[0]; 
    for(i = 0; i < arr.length; i++){
        if(arr[i] > max)
        max = arr[i];
    }
    console.log("largest is: " + max);
}
getlargest();