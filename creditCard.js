$(document).ready(function(){
    $('#btn').click(function(){
        var result=$('#cr').val();
        if(result.length==16)
        {
           var re= result.replace(/\d{12}/,'************');
        
             $('#output').html('Your credit card no. is = '+re);
        }
        
        else
        {
            $('#output').html("Please enter valid credit card no.");
            
        }
            
    
    });

});