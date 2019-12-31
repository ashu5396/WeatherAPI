// //we are using on() and off() method to associate click event only once to the button element

// $(document).ready(function(){
//     $('#btn').on('click',function(){
//         alert('Button Clicked')
//         $(this).off('click')
//         })
// })

// //===========================================================================


// //instead of using  on() and off() method to associate click event only once, we can also use one() method  to the button element

// $(document).ready(function(){
//     $('#btn').one('click',function(){
//         alert('Button Clicked')
        
//         })
// })



// // // In below code we are associating three event(click, mouseover and mouseout) to the button element only once using on() and off() function
// $(document).ready(function(){
//     $('#btn').on({
//         'click':function(){
//              $(this).css('background-color','orange')
//              $(this).off('click');
//             },
//          'mouseover':function(){
//             $(this).css('background-color','Green')
//              $(this).off('mouseover');
//             },
//          'mouseout':function(){
//             $(this).css('background-color','Grey')
//              $(this).off('mouseout');
//             } 
//     })
       
        
        
// })






// // // In below code we are associating three event(click, mouseover and mouseout) to the button element only once using one() function
// $(document).ready(function(){
//     $('#btn').one({
//         'click':function(){
//              $(this).css('background-color','orange')
             
//             },
//          'mouseover':function(){
//             $(this).css('background-color','Green')
//              },
//          'mouseout':function(){
//             $(this).css('background-color','Grey')
//              } 
//     })
       
        
        
// })






// // In above example we had only one button element, but suppose we have three button element and if we are going to associate three event to these button element using one() method
// //one() method execute atmost once for each button element
$(document).ready(function(){
    $('input[type="button"]').one({
        'click':function(){
             $(this).css('background-color','orange')
             
            },
         'mouseover':function(){
            $(this).css('background-color','Green')
             },
         'mouseout':function(){
            $(this).css('background-color','Grey')
             } 
    })
       
        
        
})
