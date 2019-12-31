// $(document).ready(function(){
//     $('#btn').bind('click', function(event){
//         $('#output').html('Button Clicked at <br>X='+event.pageX+'<br>Y='+event.Y)
//     });
// });


// //it is possible to bind multiple event handlers to a button 
// //below are the code
// $(document).ready(function(){
//     $('#btn').bind('click mouseover mouseout', function(event){
//         if(event.type=='click')
//         {
//         $('#output').html('Button Clicked at <br>X='+event.pageX+'<br>Y='+event.pageY)
//         }
//         else if(event.type=='mouseover')
//         {
//             $(this).addClass('buttonStyle')
//         }
//         else
//         {
            
//             $(this).removeClass('buttonStyle')
//         }
//     });
// });




//let us take three button element and try to enable and disable bind event handlers to the first button by using second and third button respectively 
//below are the code
$(document).ready(function(){
    $('#btn').bind('click mouseover mouseout', function(event){
                if(event.type=='click')
                {
                $('#output').html('Button Clicked at <br>X='+event.pageX+'<br>Y='+event.pageY)
                }
                else if(event.type=='mouseover')
                {
                    $(this).addClass('buttonStyle')
                }
                else
                {
                    
                    $(this).removeClass('buttonStyle')
                }
            });
    
              $('#ebtn').click(function(){
                  $('#btn').bind ('mouseover',(function(){
                         $(this).addClass('buttonStyle');
                  }));
                });

            $('#dbtn').click(function(){
                 $('#btn').unbind('mouseover');
            });


        });
    

