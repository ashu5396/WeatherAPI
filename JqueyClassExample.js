$(document).ready(function(){
    $('#btn1').click(function(){
        $('p').addClass('colorClass');
    });
    $('#btn2').click(function(){
       
        $('p').removeClass('colorClass');
    });
    $('#btn3').click(function(){
       
        $('p').addClass('colorClass italicsClass');
    });
    $('#btn4').click(function(){
        $('p').removeClass('colorClass italicsClass');
    });
    $('#btn5').click(function(){
        $('p').addClass('colorClass italicsClass boldClass');
    });
    $('#btn6').click(function(){
        $('p').removeClass();
        // or we can write 
        //$('p').removeClass('colorClass italicsClass boldClass');
    });

    $('#btn7').click(function(){
        $('p').toggleClass('colorClass italicsClass boldClass');//toggleClass() is used, if the html element has the specified class then it is removed. If the element don't have specified classes then it will be added  
    //if paragraph tag is having class called colorClass,italicsClass and  boldClassthen toggleClass() method will remove these classes, and if in case these classes are not there then this method will add these classes in the <p> tag
    });
});




