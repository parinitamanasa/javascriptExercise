function removeduplicates(){
    var arr = [3,4,5,6,3,2,5,4,2];
    let unique_array = [];
    for(let i = 0;i < arr.length; i++){
        if(unique_array.indexOf(arr[i]) == -1){
            unique_array.push(arr[i])
        }
    }
    console.log(unique_array);
}
removeduplicates();