

// Demo of Jquery

// below code will print the value of the selected checkBoxes

$(document).ready(function(){
    $('input[name="skills"]').click(function(){//by clicking on checkbox only, it will display the total no.of skills checked and lists of the skills because we are using $('input[name="skills"]')

       getCheckedcheckBoxes('skills');

});
$('#citybtn').click(function(){ ////by clicking button only, it will display the total no.of skills checked and lists of the skills because we are using $('#citybtn')
getCheckedcheckBoxes('cities');
       

});

var getCheckedcheckBoxes=function(groupName){
    var result=$('input[name="'+groupName+'"]:checked');
    if(result.length>0)
    {
        var resultString=result.length+groupName+" checked<br>";
        result.each(function()
        {
            resultString+=$(this).val()+"<br>";
        });
         $('#div'+groupName).html(" "+resultString);
    }
    
    else
    {
        $('#div'+groupName).html("CheckBox is not Checked");
        
    }
        

}

});







//bellow code will Print the value of the checkboxes alongwith text value of the checkBoxes 


// $(document).ready(function(){
//     $('input[name="skills"]').click(function(){//by clicking on checkbox only, it will display the total no.of skills checked and lists of the skills because we are using $('input[name="skills"]')

//        getCheckedcheckBoxes('skills');

// });
// $('#citybtn').click(function(){ ////by clicking button only, it will display the total no.of skills checked and lists of the skills because we are using $('#citybtn')
// getCheckedcheckBoxes('cities');
       

// });

// var getCheckedcheckBoxes=function(groupName){
//     var result=$('input[name="'+groupName+'"]:checked');
//     if(result.length>0)
//     {
//         var resultString=result.length+groupName+" checked<br>";
//         result.each(function()
//         {
//             var selectedValue=$(this).val();
//             resultString+=selectedValue+"-"+$('label[for="cb-'+selectedValue+'"]').text()+"<br>";
//         });
//          $('#div'+groupName).html(" "+resultString);
//     }
    
//     else
//     {
//         $('#div'+groupName).html("CheckBox is not Checked");
        
//     }
        

// }

// });




















