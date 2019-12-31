$(document).ready(function(){
     $('li').each(function(index,element){
        alert(index+" :"+$(element).text());

        //we can use "this" in place of element, the output will be same in bothe cases. so we can remove element parameter from the function, it will work fine
       // alert(index+" :"+$(this).text());


     });
});

//we can exit from the each function by giving if condition
//bellow are the code to get out from the each function when condition satisfy text=="UK"

// $(document).ready(function(){
//     $('li').each(function(){
//        if($(this).text()=='UK')
//        {
//            return false;
//        }
//        else{
//        alert($(this).text());
//        }


//     });
// });


// below code can change the color of all list items to red
// $(document).ready(function(){
//     $('li').each(function(){
//       $(this).css('color','red');


//     });
// });




//below code are also same as above code, it will give the same output

// below code can change the color of all list items to red
// $(document).ready(function(){
//     $('li').css('color','red');


//     });