

//Demo of Jquery

$(document).ready(function(){
    $('#btn').click(function(){
        var result=$('input[type="checkbox"]:checked');
        if(result.length>0)
        {
            var resultString=result.length+" checkboxes checked<br>";
            result.each(function(){
                resultString+=$(this).val()+"<br>";
            });
             $('#output').html(resultString);
        }
        
        else
        {
            $('#output').html("CheckBox is not Checked");
            
        }
            
    
    });

});
