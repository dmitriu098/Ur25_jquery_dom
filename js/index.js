

$(document).ready(function() {

    $('span').bind('click', function() {

       removeClass();


      $(this).parent().addClass('active');


        var color = {
            'red': ['images/red.jpg', ['l', 'xl', 'xxxl']],
            'blue':['images/blue.jpg', ['s', 'm', 'l', 'xl']],
            'green':['images/green.jpg', ['s', 'sm', 'm', 'l', 'xl']] ,
            'yellow':['images/yellow.jpg', ['s', 'm', 'l', 'xxl']],
            'black':['images/black.jpg', ['sm', 'm', 'l', 'xxl']],
            'white':['images/white.jpg', ['s', 'm', 'l', 'xxl']]
        };



        var index = $(this).attr('id');

        $('img').attr({src: color[index][0], alt: index});



                var div = $('<div></div>');

        var span = $('<span class="size"></span>');
        console.log(color[index][1].length);



                $('.card-color').after(div);
                $(div).addClass('size-block');
                $(div).css('display', 'flex');


              //Как добавить несколько спанов в див?

                $(span).text(color[index][1][0]);
                    $(div).append(span);



});

});



function removeClass(){
    $('span').parent().removeClass('active');
}


function removeDiv(){
    if ($(document).hasClass('size-block'))
    {
        $(document).removeClass('size-block');
    }

}


