$(document).ready(function(){
    var result='';
    $('.inputRequired').change(function(){
    
    if(result==''){
        result=$(this).val();
    }
    else{
        result+=', '+$(this).val();
    }
    $('#output').html(result);
    });
    
});