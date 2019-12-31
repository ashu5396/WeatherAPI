
//$.each() method is a immutable iterator where as $.map() is mutable iterator
// $.each() returns the original array where as $.map() returns the new array
// the order of callback function()'s argument is index,element in case of $.each() where as element,index in case of $.map(), look at the below comments to understand
//  $.each(arr,function(index,element){})
//$.map(arr,function(element,index){})
// in case of each() method it is possible to terminate the iteration where as in case of map() method we can't terminate from the function
// $(document).ready(function(){
//  var arr=[1,2,3,4,5,6,7];
 
 
 
 
 
//  function functionA(index,element)
//  {
//      return element*5;
//  }
//  function functionB(element,index)
//  {
//     return element*5;
//  }
//  var result1=$.each(arr,functionA);
//  var result2=$.map(arr,functionB);
//  document.write("each="+result1+"<br>"); //output: 1,2,3,4,5,6  $.each() method returns us the original array 
//  document.write("map="+result2); //output: 5,10,15,20,25,30 //$.map() method returns the new array which is the multiplied value from the functionB
// });






// in case of each() method it is possible to terminate the iteration where as in case of map() method we can't terminate from the function
$(document).ready(function(){
    var arr=[1,2,3,4,5,6,7];
    
    $.each(arr,function(index,element){
        if(element==3)
        return false;
        document.write(element+" ")
    });

    //below are the code for $.map(), when element is equal to 3 it will not print 3 but it will continue the iteration. so we are getting output as [1 2 4 5 6 7]
document.write("<br>");    
    $.map(arr,function(element,index){
        if(element==3)
        return false;
        document.write(element+" ")
    });

   });