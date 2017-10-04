//Main Site JS
$(document).ready(function(){
  function resizeBodyTop() {
    $('body, #top').height($('#bottom').height() + 120);
  } resizeBodyTop();
  $(window, document).on('resize', function() {
    resizeBodyTop();
  })
});
