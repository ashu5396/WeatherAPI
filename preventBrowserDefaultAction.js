$(document).ready(function(){
    $(this).on('contextmenu',function(event){
        event.preventDefault(); //preventDefault() function is going to prevent the default action from happening
        $('#result').append('Right Click is Desabled<br>');
    })
    $('#HyperLink').on('click',function(event){
        event.preventDefault();
        $('#hyperlink').append('HyperLink is Disabled<br>');
    

    })
})