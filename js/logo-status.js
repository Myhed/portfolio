const cards = $('.card')

cards.on('mouseover',(e) => {
    $(e.currentTarget).children().eq(0).addClass('colored')
})

cards.on('mouseout',(e) => {
    $(e.currentTarget).children().eq(0).removeClass('colored')
})