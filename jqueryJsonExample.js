// json is having information of only one employee data

// $(document).ready(function(){
//     var employeeJSON={
//         "fName":"Ashutosh",
//         "lName":"Kumar",
//         "id":1234,
//         "Designation":"Analyst"
//     };
//     var result="FirstName="+employeeJSON.fName+"<br>"+"LastName="+employeeJSON.lName+"<br>"+"ID="+employeeJSON.id+"<br>"+"Designation="+employeeJSON.Designation;
//     $('#output').html(result);
// });


// If JsonObject contains information
//about more  than one employee
//then we use JSON Array with Square Bracket([])
//below is the code


// $(document).ready(function(){
//     var employeeJSON=[
//     {
//         "fName":"Ashutosh",
//         "lName":"Kumar",
//         "id":1234,
//         "Designation":"Analyst"
//     },
//     {
//         "fName":"Antra",
//         "lName":"Verma",
//         "id":4231,
//         "Designation":"Analyst/Software Engineer"
//     },
//     {
//         "fName":"Ashwini",
//         "lName":"Ashu",
//         "id":4321,
//         "Designation":"Analyst/Coder of Capgemini"
//     }

// ];
// var result='';
// for(var i=0;i<employeeJSON.length;i++)
// {
//     result+= "Name="+employeeJSON[i].fName+" "+employeeJSON[i].lName+"<br>"+"ID="+employeeJSON[i].id+"<br>"+"Designation="+employeeJSON[i].Designation+"<br><br<br>";
// }
   
//     $('#output').html(result);
// });




// we can Write above JSON Object in other as given below
// instead of using JSON Array we ca add one additional pair of curly braces({})
//code are written below  
// $(document).ready(function(){
// var employeeJSON={
//     "Ashutosh":{
//         "fName":"Ashutosh",
//         "lName":"Kumar",
//         "id":1234,
//         "Designation":"Analyst"
//     },
//     "Antra":{
//         "fName":"Antra",
//         "lName":"Verma",
//         "id":4231,
//         "Designation":"Analyst/Software Engineer"
//     },
//     "Ashwini":{
//         "fName":"Ashwini",
//         "lName":"Ashu",
//         "id":4321,
//         "Designation":"Analyst/Coder of Capgemini"
//     }

// };

// $('#output').html(employeeJSON.Ashutosh.fName);



// });


//below code converts json object into json String by the help of stringify() method 
// here employeeJSON is a JSON Object


// $(document).ready(function(){
//     var employeeJSON=[
//         {
//             "fName":"Ashutosh",
//             "lName":"Kumar",
//             "id":1234,
//             "Designation":"Analyst"
//         },
//         {
//             "fName":"Antra",
//             "lName":"Verma",
//             "id":4231,
//             "Designation":"Analyst/Software Engineer"
//         },
//         {
//             "fName":"Ashwini",
//             "lName":"Ashu",
//             "id":4321,
//             "Designation":"Analyst/Coder of Capgemini"
//         }
//     ];
    
//     var jsonString=JSON.stringify(employeeJSON);
//     $('#output').html(jsonString);
    
    
    
//     });


// convert JsonString into JSON Object using parse() method. and we are iterating
//through the each loop
//below are the code

$(document).ready(function(){
var jsonString='[{"fName":"Ashutosh","lName":"Kumar","id":1234,"Designation":"Analyst"},{"fName":"Antra","lName":"Verma","id":4231,"Designation":"Analyst/Software Engineer"},{"fName":"Ashwini","lName":"Ashu","id":4321,"Designation":"Analyst/Coder of Capgemini"}]'
var convertIntoJsonArray=JSON.parse(jsonString);
console.log(convertIntoJsonArray);
var result='';
$.each(convertIntoJsonArray, function(i,item){
    result+="Name="+item.fName+" "+item.lName+"<br>";
    result+="ID="+item.id+"<br>";
    result+="Designation="+item.Designation+"<br><br>";
});
$('#output').html(result);
});




 


