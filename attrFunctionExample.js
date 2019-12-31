// this statement will give the title of only first matching element
// here output we will get "div1" and not "div2" because we will get only the value of first matching element

    // $(document).ready(function(){
    // var result=$('div').attr('title');
    // $('#outputArea').html(result);
    //    });
   
   
   
   
   
    //if we want to get attribute of all div element then we have to use each loop. Below are the code
    // $(document).ready(function(){
    //     var result='';
    //     $('div').each(function(){
    //     result+=$(this).attr('title');

    //     $('#outputArea').html(result);
    //    });
      
    //  });






    //if we want to set the  attribute values . Below are the code
    // $(document).ready(function(){
    //     $('div').attr('title','My New Title');// this statement change the title to "My New Title" to all div element
    //     var result='';
    //     $('div').each(function(){            // we are printing the title value through each function as we had done earlier in above code,but this time we will get modified value of title that is "My New Title"
    //         alert($(this).attr('title'));    
    //     result+=$(this).attr('title')+"<br>";
    //     $('#outputArea').html(result);
   
    //    });
    //  });




    //if we want to set different attribute value to each div element then follow the below code, we will use each loop

    // $(document).ready(function(){
    //     $('div').each(function(index){ // here we are using index
    //         $(this).attr('title','My New Title'+(index+1)); //incrementing the index value by one.
    //     })
    //     var result='';
    //     $('div').each(function(){            // we are printing the title value through each function as we had done earlier in above code,but this time we will get modified value of title that is "My New Title1, My New Title2 and My New Title3"
    //         alert($(this).attr('title'));    
    //     result+=$(this).attr('title')+"<br>";
    //     $('#outputArea').html(result);
   
    //    });
    //  });


    //set multiple attribute value Using JSON, bellow is Code
    // $(document).ready(function(){
    //     var jsonObject={'title':'New DIV Title',
    //                       'style':'border:2px solid green;',
    //                         'Name':'My DIV'
    //                     };
    //                    $('div').attr(jsonObject);
    //                     var result='';
    //                     $('div').each(function(){
    //                         result+="tile="+$(this).attr('title');
    //                         result+="<br>style="+$(this).attr('style');
    //                         result+="<br>Name="+$(this).attr('name')+"<br><br>";
                          
                                
    //    });
    //    $('#outputArea').html(result);
    //  });


//we can also set the multiple attribute value by using method chaining
//below are the code
    // $(document).ready(function(){
        
    //             $('div')
    //                 .attr('title','My New Title')
    //                 .attr('style','border:2px solid green;')
    //                 .attr('name','my div');
    //                 var result='';
    //                 $('div').each(function(){
    //                     result+="tile="+$(this).attr('title');
    //                     result+="<br>style="+$(this).attr('style');
    //                     result+="<br>Name="+$(this).attr('name')+"<br><br>";
                                              
                                                    
    //                        });
    //                        $('#outputArea').html(result);

    //     });


    //we can also remove an attribute by using removeAttr() method
    //let us understand with the help of an example
    //code is below

    // $(document).ready(function(){
       
    //         var re="Before removing the title attribute, there are "+$('div[title]').length+" div having title attribute <br>";

           
    //         $('div[title]').removeAttr('title');
    //        re+="After removing there are "+$('div[title]').length+" div having title attribute";
    //         $("#outputArea").html(re);
    // });
     