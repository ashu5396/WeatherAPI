// //append() method appends the given html content in append() method i.e."is software Engineer" to all html matching element
// $(document).ready(function(){
//     $('div').append('<b>is a software Engineer</b>');
// });


// //appendTo() method 
// $(document).ready(function(){
//     $('<b>is a software Engineer</b>').appendTo('div')
// });


// bothe append() and appendTo() produce the same output
//in append() method first we specify the target element and then the content that we want to append
//in appendTo() method first we specify content and then the target element


//prepend() and prependTo() method given below

//$(document).ready(function(){
  //  $('div').prepend('<b>is a software Engineer</b>')
    //$('<b>is a software Engineer</b>').prependTo('div')
    
//         });



  
// in all above examples we were adding custom content
//but in below example we are adding content given in span element to each div element
$(document).ready(function(){
    $('div').append($('#spanElement'))
});
