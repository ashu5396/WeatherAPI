//below code is for single selected option

// $(document).ready(function(){
//     $('#selectCountries').change(function(){
//        var selectedOption= $('#selectCountries option:selected');
//        $('#output').html("Value="+selectedOption.val()+", Text="+selectedOption.text()+"<br>");
//     });
// });




//below code is for multi selected option


$(document).ready(function(){
        $('#selectCountries').change(function(){
           var selectedOption= $('#selectCountries option:selected');
           var string='';
           selectedOption.each(function(){
                string+="Value="+$(this).val()+" "+"Text="+$(this).text()+"<br>";
           });
           $('#output').html(string);
        });
    });