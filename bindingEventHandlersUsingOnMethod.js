
// // here we are using on and off method to bind event handlers to the button element

// $(document).ready(function(){
//     $('#btn').on('click mouseover mouseout', function(event){
//                 if(event.type=='click')
//                 {
//                 $('#output').html('Button Clicked at <br>X='+event.pageX+'<br>Y='+event.pageY)
//                 }
//                 else if(event.type=='mouseover')
//                 {
//                     $(this).addClass('buttonStyle')
//                 }
//                 else
//                 {
                    
//                     $(this).removeClass('buttonStyle')
//                 }
//             });
    
//               $('#ebtn').click(function(){
//                   $('#btn').bind ('mouseover',(function(){
//                          $(this).addClass('buttonStyle');
//                   }));
//                 });

//             $('#dbtn').click(function(){
//                  $('#btn').off('mouseover');
//             });


//         });
    



//above we have seen example using on method
//but in above example, we have noticed that when any of these event(click,mouseover,mouseout) occurs, we are calling the same anonimous function
//we can also use different functions for different event then we will go for json object
//let us understand the below example using json object
//we can use on() or bind() method
//in below example we are using on method, if u want to use bind() method, just replace on with bind, output will be same
$(document).ready(function(){
    
    $('#btn').on({
        click:function(event){$('#output').html('X='+event.pageX+'<br>Y='+event.pageY)},
        mouseover:function(){$(this).addClass('buttonStyle')},
        mouseout:function(){$(this).removeClass('buttonStyle')}
    });
    
              $('#ebtn').click(function(){
                  $('#btn').bind ('mouseover',(function(){
                         $(this).addClass('buttonStyle');
                  }));
                });

            $('#dbtn').click(function(){
                 $('#btn').off('mouseover');
            });


        });

//priviously we have seen jquery shothand functions(i.e., .click, .mouseover, .mouseout etc.), they call on() function behind the scenes
    
