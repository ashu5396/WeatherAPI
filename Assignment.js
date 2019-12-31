$(document).ready(function () {
    $('#variant5').on('click',function(){
        $('#variant-choose').css('height','100px')
    })
    $('#icici').click(function(){
        $(this).html('SELECTED').css(
            {
                'margin-left':'23px',
                'background-color':'#f8d718'
            });
    })
});