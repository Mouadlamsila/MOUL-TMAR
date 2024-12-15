$(document).ready(function() {
    $("#store").hover(function() {
      $(this).css('transition',"300ms ease").removeClass('-right-16').addClass('right-0')
    },function() {
      $(this).css('transition',"300ms ease").removeClass('right-0').addClass('-right-16')
    })
  })
