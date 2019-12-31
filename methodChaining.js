// $(document).ready(function(){
//     $('li').css('color','green');
//     $('li').slideUp(1000);
//     $('li').slideDown(1000);
//     $('li').attr('title','Ashutosh');
// });

// instead of above code we can write same code as below
// $(document).ready(function(){ // this
//     $('li')                   // is
//     .css('color','green')     // called
//     .slideUp(1000)            // method chaining
//     .slideDown(1000)          // in 
//     .attr('title','Ashutosh');// jquery, we can use dot(.)
// });



// method chaining will not work because we are using text() method which is not 
// returning jquery object. It is giving value of the list items in a single string

$(document).ready(function(){ // this
    $('li')                   // is
    .text()                   //not
    .css('color','green')     // method chaining
    .slideUp(1000)            // is not returning   
    .slideDown(1000)          // because text() method  
    .attr('title','Ashutosh');// jquery Object
});

