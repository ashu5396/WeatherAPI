$(document).ready(function(){
    $('#smallImages img').on(
      {
         'click':function(){ 
            var imgUrl=$(this).attr('src');
             var effect=$('#imgEffect').val();
             var duration=$('#imgDuration').val()*1000;
            
             if(effect=='Fade')
             {
               $('#mainImage').fadeOut(duration,function(){  
                 $(this).attr('src',imgUrl)  
                }).fadeIn(duration);
             }
             else
                {
                    $('#mainImage').slideUp(duration,function(){
                      $(this).attr('src',imgUrl)  
                     }).slideDown(duration)
                 }
            
                           },
      'mouseover':function(){
                              $(this).css({
                                'border': '3px solid orangered',
                                'cursor': 'pointer'
                              })
                            },
        'mouseout':function(){
            $(this).css({
                'border': '2px solid grey',
                'cursor': 'default'
              })
                             }
      })
      $('#btnEnlarge').click(function(){
        var height=$('#mainImage').height()+100;
        var width=$('#mainImage').width()+100;
        $('#mainImage').attr('height',height).attr('width',width);
      })

      $('#btnShrink').click(function(){
        var height=$('#mainImage').height()-100;
        var width=$('#mainImage').width()-100;
        $('#mainImage').attr('height',height).attr('width',width);
      })
})
