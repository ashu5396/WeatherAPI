
// ///first let's see the code for pushing all element's text into an array using each() method 
// $(document).ready(function(){
//     var result=[];
//     $('li').each(function(){
//         result.push($(this).text());
//     });
//     alert(result);
// });




// //first let's see the code for pushing all element's text into an array using map() method 
// $(document).ready(function(){
    
//     alert($('li').map(function(){
//        return $(this).text();
//     }).get());
   
// });

//now let us understand the above code 
//map() method is used to iterate over each list items. it is same as each() method
//$('li').text() will select all the text of the list items
//we are using return so that it will return the text value of the li items
//we are using get() method to convert all the result into an array
//and finally we are wrapping all this code into alert methos to show the value in alert form


//  // we are seperating each text value with a pipelinesymbol i.e.(|)
//  //below are the code written using each() method
// $(document).ready(function(){
    
   
//     var result='';
//     $('li').each(function(){
        
//         result+=$(this).text()+"|";
        
       
//     });
//     result=result.substr(0,result.length-1);// this statement is used to remove last character of result
    
//     alert(result);
// });




// we are seperating each text value with a pipelinesymbol i.e.(|)
 //below are the code written using map() method
 $(document).ready(function(){
    
  
    
    alert($('li').map(function(){
        
       return $(this).text();
        
       
    }).get().join("|"));
   
});