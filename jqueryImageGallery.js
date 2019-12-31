

// $(document).ready(function(){
//     $('#smallImages img').on({
//          'click':function(){ 
//              var imgUrl=$(this).attr('src');
//              $('#mainImage').attr('src',imgUrl)
//           },
//         'mouseover':function(){
//                               $(this).css({
//                                 'border': '3px solid orangered',
//                                 'cursor': 'pointer'
//                               })
//                               },
//         'mouseout':function(){
//             $(this).css({
//                 'border': '2px solid grey',
//                 'cursor': 'default'
//               })
//              },
//     })
// })


// // =======================================================================================================
 
// // suppose we want the old image to fadeout slowly and new image to fadein slowly
// // below is the code

$(document).ready(function(){
    $('#smallImages img').on({
         'click':function(){ 
             var imgUrl=$(this).attr('src');
             $('#mainImage').fadeOut(500,function(){ //we are selecting oldimage jquery object and it is getting fadeOut at 500 milisecond speed. when old image is fading out, we are executing a function
                 $(this).attr('src',imgUrl) //here we are setting new src attribute to the selected image  
                }).fadeIn(500)}, // on selected image we are performing fadeIn operation.
        'mouseover':function(){
                              $(this).css({
                                'border': '3px solid orangered',
                                'cursor': 'pointer'
                              })
                              },
        'mouseout':function(){
            $(this).css({
                'border': '2px solid grey',
                'cursor': 'default'
              })
             },
    })
})
