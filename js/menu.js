$(document).ready(function(){
    $('#btn-menu').click(function(e){
        e.preventDefault()
        $('#menu').toggle('slow')
    })

    //Criar uma função para monitorar os links
    /*$('a').click(function(e){
    e.preventDefault()
    let url = $(this).attr('href');

    if(url == 'contact'){
        $('#'+url).show();
        $('#home').hide();
        $('#action').hide();
        $('#about').hide();
    }

    else if (url == 'home'){
        $('#'+url).show();
        $('#contact').hide();
        $('#action').hide();
        $('#about').hide();
    }
    
    else if (url == 'action'){
        $('#'+url).show();
        $('#contact').hide();
        $('#home').hide();
        $('#about').hide();
    }

    else if (url == 'about'){
        $('#'+url).show();
        $('#contact').hide();
        $('#action').hide();
        $('#home').hide();
    }
    })*/
})
