$(function () {
    $i = 0;
    $('.col').click(function () {
        if ($(this).attr('data-input') == '0') {
            if ($i % 2 === 0) {
                $(this).attr('data-input','1').text('X');
                $i++;
            } else {
                $(this).attr('data-input','2').text('O');
                $i++;
            }
            ifwin();
        }
    })
    
    function ifwin(){
        $.each($('.row'), function(k,v){
            if($(this).find('.col[data-input="1"]').length == 3){
                $('#player').text('Player 1 wins').parent().show();
            }else if($(this).find('.col[data-input="2"]').length == 3){
                $('#player').text('Player 2 wins').parent().show();
            }else{
                
            }
        })
        
        $.each($('.row .col1'), function(k, v){
            if($('.col' + (k + 1) + '[data-input="1"]').length == 3){
                $('#player').text('Player 1 wins').parent().show();
            }else if($('.col' + (k + 1) + '[data-input="2"]').length == 3){
                $('#player').text('Player 2 wins').parent().show();
            }else{
                //else
            }      
        })
        
        $count = 0;
        $.each($('.row'), function(k,v){
            if($(this).find('.col' + (k + 1)).attr('data-input') == '1'){
                $count++;
            }else if($(this).find('.col' + (k + 1)).attr('data-input') == '2'){
                $count--;
            }
        })
        
        if($count == 3){
            $('#player').text('Player 1 wins').parent().show();
        }else if($count == -3){
            $('#player').text('Player 2 wins').parent().show();
        }else{
            //else
        }
        
        $count = 0;
        $.each($('.row'), function(k,v){
            if($(this).find('.col' + (3 - k)).attr('data-input') == '1'){
                $count++;
            }else if($(this).find('.col' + (3 - k)).attr('data-input') == '2'){
                $count--;
            }
        })
        
        if($count == 3){
            $('#player').text('Player 1 wins').parent().show();
        }else if($count == -3){
            $('#player').text('Player 2 wins').parent().show();
        }else{
            //else
        }
        
        
        if($('.col[data-input="0"]').length == 0 && $('#player').text() == ''){
            $('#player').text("It's Draw").parent().show();
        }
    }
    
    
    $('#again').click(function(){
        $('.col').attr('data-input','0').text('');
        $i = 0;
        $('#win').hide();
        $('#player').text('');
    })
    
})