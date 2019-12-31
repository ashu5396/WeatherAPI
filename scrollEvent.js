// // below code is for counting how many times scroll happened

// $(document).ready(function(){
//     var count=0;
//     $('div').scroll(function(){ //whenever scroll event occures, we execute a function which will increment the value of count by 1 and by this way we will get to know how many times this scroll event occures
//             count+=1;
//          $('span').text(count)
//     })
// })

//=========================================================

// // Below code is for checking whether you have scrolled up or scrolled down   

$(document).ready(function(){

    var count=0;

    var lastScroll=0; //we are taking one variable to assign the last scrolled position
        
        $('div').scroll(function(){ //whenever scroll event occures, we execute a function which will increment the value of count by 1 and by this way we will get to know how many times this scroll event occures
            count+=1;
            $('span').text(count)  

            var currentSrollPosition=$(this).scrollTop(); // scrollTop() function gives us the vertical scroll position 
                if(currentSrollPosition>lastScroll)
                {
                $('#result').text('You Scrolled Down');
                }
                else
                {
                    $('#result').text('You Scrolled Up');
                    
                }
                lastScroll=currentSrollPosition;   
            })
    })