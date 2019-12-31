// $(document).ready(function(){
//     $('#btn').on('click',sayHallo);
//     function sayHallo(){
//         alert('hello');
//     }
// });

// // below passing json data in the event object and fetching those data using data property of event object


// $(document).ready(function(){
//     $('#btn').on('click',{
//         firstname:"Ashutosh",// here we are passing json data to the event handler
//         lastname:"Kumar",
//         company:"Capgemini"
//     },sayHello);
//     function sayHello(event){
//         alert(event.data.firstname);//event handler has a data property by using which we can fetch the data(firstname, lastname, company)
//         alert(event.data.lastname);
//         alert(event.data.company);
//     }
// });





// // below we are binding two click event on button

// $(document).ready(function(){
//     $('#btn').on('click',{
//         firstname:"Ashutosh",// here we are passing json data to the event handler
//         lastname:"Kumar",
//         company:"Capgemini"
//     },sayHello);

//     $('#btn').on('click',{
//         firstname:"Ashutosh"// here we are passing only one json data i.e. firstname to the event handler, in this case we will get output as 'Ashutosh undefined,undefined'. so for getting rid out from such messages we will give condition in if statement
        
//     },sayHello);

//     function sayHello(event){
//         alert((event.data.firstname!=null?event.data.firstname:'First Name Not Found')+' '+(event.data.lastname!=null?event.data.lastname:'Last Name Not Found')+' '+(event.data.company!=null?event.data.company:'Company Not Found'));//event handler has a data property by using which we can fetch the data(firstname, lastname, company)
        
//     }
// });






// below we are binding three click event on button

$(document).ready(function(){
    $('#btn').on('click',{
        firstname:"Ashutosh",// here we are passing json data to the event handler
        lastname:"Kumar",
        company:"Capgemini"
    },sayHello);

    $('#btn').on('click',{
        firstname:"Ashutosh"// here we are passing only one json data i.e. firstname to the event handler, in this case we will get output as 'Ashutosh undefined,undefined'. so for getting rid out from such messages we will give condition in if statement
        
    },sayHello);

    $('#btn').on('click',sayHello);//here we are not passing json data so in data property of event object, null will get assigned 

    function sayHello(event){
        
    if(event.data==null)
    {
        alert('No Record Found');
    }
    else {
        alert((event.data.firstname!=null?event.data.firstname:'First Name Not Found')+' '+(event.data.lastname!=null?event.data.lastname:'Last Name Not Found')+' '+(event.data.company!=null?event.data.company:'Company Not Found'));//event handler has a data property by using which we can fetch the data(firstname, lastname, company)
        $('#output').html((event.data.firstname!=null?event.data.firstname:'First Name Not Found')+' '+(event.data.lastname!=null?event.data.lastname:'Last Name Not Found')+' '+(event.data.company!=null?event.data.company:'Company Not Found'));
    }
}
});