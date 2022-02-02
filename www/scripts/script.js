$(document).ready(function(){
   let a = 10;
   console.log(a);
  let isOpen = false;

  $('.j-burger').on('click', function() {
    // if (isOpen) {
    //   $('.j-menu').slideUp();
    //   isOpen = false;
    // } else {
    //   $('.j-menu').slideDown();
    //   isOpen = true;
    // }

    $('.j-menu').slideToggle();
  });

});
