function getdate(){
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    console.log(day + "/" + month + "/" + year);
    console.log(hours+":"+minutes+":"+seconds);
    }
    getdate();