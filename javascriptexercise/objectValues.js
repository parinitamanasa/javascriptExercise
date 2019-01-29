var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];
let occupations = myObj.filter(function(obj) {
    return obj.occupation === "Programmer";
  });
  console.log("Exercise 1")
  console.log(occupations);
  console.log("Exercise 2\n" + "Sorting by age in descending order");
console.log(myObj.sort(function(obj1,obj2){ return obj1.age-obj2.age;
}).reverse());
console.log("Exercise4\n" + "Fteching names into an array");
var maps = myObj.map(st => st.name);
console.log(maps);
console.log("Exercise 3\n");
var teamLeader = [];
var count = 0;
var programmer = [];
var count1 = 0;
var object = new Object();
for(var key in myObj){
    if(myObj[key].occupation == "Team Leader"){
        delete myObj[key].occupation;
        teamLeader[count] = myObj[key];
        count = count+1;
    }
    else if(myObj[key].occupation == "Programmer"){
        delete myObj[key].occupation;
        programmer[count1] = myObj[key];
        count1 = count1 + 1;
    }
}
object.teamLeader = teamLeader;
object.programmer = programmer;
console.log(object);