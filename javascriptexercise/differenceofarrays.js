function difference(){
    var arr =[];
            var arr1 = [50,50,70];
            var arr2 = [60,70,20,40,30,50];
            arr1 = arr1.toString().split(',').map(Number);
            arr2 = arr2.toString().split(',').map(Number);
            // for array1
            for (var i in arr1) {
               if(arr2.indexOf(arr1[i]) === -1)
               arr.push(arr1[i]);
            }
            // for array2
            for(i in arr2) {
               if(arr1.indexOf(arr2[i]) === -1)
               arr.push(arr2[i]);
            }
            console.log(arr);
            // console.log(arr.sort((x,y) => x-y));
}
difference();