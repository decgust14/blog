$(document).ready(function() {
    console.log("Hello")

    $('#changeText').click(function(){
        $('span').text('jQuery')
    $('h1').css({color:'red',fontSize:"40px"})

    })
// Shtimi i nje elemnenti ne HTML
    $('.addImg').click(function(){
        $('div').html('<img src="images/img3.jpg">')
    })
    
    // Lista
    $('button').last().click(function(){
        $('ol').toggle()
    })

    // 2 evente
    $('p').on({
        mouseenter : function(){
            let viti= new Date().getFullYear()
            $('span').last().text(viti)
        },
        click: function() {
            $('body').css('background-color','blue')
        }
    })

    // input
    $('form').submit(function(event){
        event.preventDefault()
        let sms= $('#text').val()
// ul, li
        // after dhe insertAfter
        // $('ul').after('<li>' + sms + '</li>' )
        $('<li>' + sms + '</li>' )('ul').insertAfter
        // before inserBefore


        // atend dhe  appendTo
    $('h3').text("ky eshte teksti " + sms)
    })
})






