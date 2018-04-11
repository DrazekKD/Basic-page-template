
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var start = $('.about-company-container').offset().top;
       if(scroll>= start){
           $('.count').each(function () {
               $(this).prop('Counter',0).animate({
                   Counter: $(this).text()
               }, {
                   duration: 4000,
                   easing: 'swing',
                   step: function (now) {
                       $(this).text(Math.ceil(now));
                   }
               });
           });
           $(window).unbind('scroll');
       }
});




// $('.count').each(function () {
//     $(this).prop('Counter',0).animate({
//         Counter: $(this).text()
//     }, {
//         duration: 4000,
//         easing: 'swing',
//         step: function (now) {
//             $(this).text(Math.ceil(now));
//         }
//     });
// });


