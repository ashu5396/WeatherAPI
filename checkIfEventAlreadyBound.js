// $(document).ready(function(){

//     $('#btn').click(function(){alert('Button Clicked')}) // binding click event to the button element
    
//     var jqueryObject=$('#btn'); // getting jquery Object
    
//     console.log(jqueryObject);
    
//     var rawDomElement=jqueryObject.get(0); //getting rawDomElement from jquery object 
    
//     console.log(rawDomElement);
    
//     var eventObject=$._data(rawDomElement,'events') ; // passing rawDomElement to the $._data() function and storing the evenreturned by this method to a variable eventObject
    
//     //$._data() methos is used to check whether an event is altready attached or not
//     // $._data() method takes two arguments one is rawDomElement and other is event
//     //to get rawDomElement from jquery Object we can use either "$('#btn')[0]" or "$('#btn').get(0)". We have use .get()method to get raw element from jquey object
//     // this $._data() method will return some event data which we storing in eventObject variable.
//     // if we don't have anyn event attached to the button element then this $._data() method will not return anything, so undefined will get store in eventObject variable
    
//     if(eventObject!=undefined&& eventObject.click!=undefined) //checking whether event is attached or not 
//     {  
//     alert('Event Already Attached');
//     }
//     else
//     {
//         alert('Event Not Attached');
        
//     }
       
        
        
// })


// //===================================================================================================================
// //===================================================================================================================




// // Above code is the jquery way of detecting if click event is bound to a button element.
// // since above code is jquery way, this only works if you have attached click event handeler using jquery
// // it will not work if we have attached click event handeler using raw javascript or by html element attribute
// // let us see the below example



// function clickHandeler() // // In html button element we are associating click event using "onclick" attribute. below code will not detect if click event is associated with button element or not
//   {
//       alert('Button Clicked Using Html Element Attribue')

//   }
var rawJavascript=document.getElementById('btn') 
rawJavascript.addEventListener('click',function(){ // //we are associating click event using raw javascript. below code will not detect if click event is associated with button element or not
    alert('Button clicked using raw javascript')
})
$(document).ready(function(){

  //  $('#btn').click(function(){alert('Button Clicked')}) // binding click event to the button element using jquery
  
    var jqueryObject=$('#btn'); // getting jquery Object
    
    console.log(jqueryObject);
    
    var rawDomElement=jqueryObject.get(0); //getting rawDomElement from jquery object 
    
    console.log(rawDomElement);
    
    var eventObject=$._data(rawDomElement,'events') ; // passing rawDomElement to the $._data() function and storing the evenreturned by this method to a variable eventObject
    
    //$._data() methos is used to check whether an event is altready attached or not
    // $._data() method takes two arguments one is rawDomElement and other is event
    //to get rawDomElement from jquery Object we can use either "$('#btn')[0]" or "$('#btn').get(0)". We have use .get()method to get raw element from jquey object
    // this $._data() method will return some event data which we storing in eventObject variable.
    // if we don't have anyn event attached to the button element then this $._data() method will not return anything, so undefined will get store in eventObject variable
    
    if(eventObject!=undefined&& eventObject.click!=undefined) //checking whether event is attached or not 
    {  
    alert('Event Already Attached');
    }
    else
    {
        alert('Event Not Attached');
        
    }
       
        
        
})
