// //below code is for adding list items dinamically when we click on the button

// $(document).ready(function(){
//     $('#btn').on('click',function(){
//         var newList='<li>New List</li>'
//         $('ul').append(newList);
//         })
// })

////=======================================================================================================================

// // when we click on the list items, it will fadeout/escape. below is the code. but in this case only those list items gets fadeout which is altready in the html page. below code does not work for newly added list items
// $(document).ready(function(){
//     $('li').on('click',function(){
//         $(this).fadeOut(500);
//     })

//     $('#btn').on('click',function(){
//         var newList=$('<li>New List</li>')
//         $('ul').append(newList);
//         })

       
//     })

////=======================================================================================================================




// // when we click on the list items, it will fadeout/escape. below is the code. in this case both the list items(in the html page and also the dinamically added) gets fadeout
// $(document).ready(function(){
//     $('li').on('click',function(){
//         $(this).fadeOut(500);
//     });

//     $('#btn').on('click',function(){
//         var newList=$('<li>New List</li>').on('click',function(){
//             $(this).fadeOut(500);
//         });
//         $('ul').append(newList);
//         }) ; 
//     });

// //===========================================================================================================================



// // in the above code, we are binding two click event for two list items(one for those which are there on html page and one for newly added list items). 
// //but this is not a good practice suppose we are having 500 list items, so we need to bind 500 click events which is a bad practice.
// // So in that case we will use on() method/delegate() method which is used to bind/attach single event listener to a parent the element,
//// that will fire for all descendants matching a selector, whether those descendants exist now or are added in the future. Below is the code 

//   $(document).ready(function(){
//     $('ul').on('click','li',function(){   // //we can use write 'li:even' if we want to only even items to fadeout
//         $(this).fadeOut(500);
//     })

//     $('#btn').on('click',function(){
        
//         $('ul').append('<li>New List</li>');
//         })

       
//     })

// //=========================================================


// // Below we are binding event listener using delegation() method

// $(document).ready(function(){
//     $('ul').delegate('li','click',function(){   // //in delegate() method first parameter must be selector(here selector if 'li'), then event(click), then function
//         $(this).fadeOut(500);
//     })

//     $('#btn').on('click',function(){
//     $('ul').append('<li>New List</li>');
//     })
       
//     })


// //=======================================================================



// Below we are using undelegate() method to stop the delegation 

$(document).ready(function(){
    $('ul').delegate('li','click',function(){   // //in delegate() method first parameter must be selector(here selector if 'li'), then event(click), then function
        $(this).fadeOut(500);
    })

    $('#btn').on('click',function(){
    $('ul').append('<li>New List</li>');

    $('#btnundelegate').on('click',function(){
       // $('ul').off('click','li') // we can also use off() method to stop delegation

         $('ul').undelegate('li','click')

    })
        
    })
       
    })

