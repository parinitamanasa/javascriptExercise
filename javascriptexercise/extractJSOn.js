var jsonStr = '{"One":"1","Two":"2","Three":"3","Four":"4"}';
var object = JSON.parse(jsonStr);
console.log(Object.values(object));
//Convert it into JavaScript array like:
//["1","2","3","4"]
