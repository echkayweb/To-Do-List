$('ul').on('click', 'li', function() {
    $(this).toggleClass("completed")
})
$('ul').on('click', 'span', function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove()
    })
    event.stopPropagation()
})
$('input[type="text"]').keypress(function(event) {
    if(event.which === 13) {
        var todoList = $(this).val()
        $(this).val('')
        $('ul').append("<li><span><i class='fa fa-trash'></i></span> " + todoList + "</li>")
    }
})
$('#add').click(function() {
    $('input[type="text"]').fadeToggle()
})
$('#delAll').click(function() {
    $('li').remove()
})
$('#completeAll').click(function() {
    $('li').toggleClass("completed")
})