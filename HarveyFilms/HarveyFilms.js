jQuery(document).ready(function($) {
  var $.home = $('nav a').eq(0);
  var $.about= $('nav a').eq(1);
  var $.talent= $('nav a').eq(2);
  var $.connect = $('nav a').eq(3);
  var $.awards= $('nav a').eq(4);

  $("nav a").click(function(event) {
    event.preventDefault();
    var relatedClass = $(this).attr('rel');
    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").siblings().addClass("activeNav");
    $(relatedClass).siblings().removeClass("active");
    $(relatedClass).addClass('active');

    console.log(relatedClass);

    if(relatedClass === ".home") {
      $('.jtitle').hide();
      console.log("hide");
    } else{
      $('.jtitle').show();
      console.log("show");
    };

  });

//   $('img').click(function(event) {
//     event.preventDefault();
//     $(this).siblings().hide();
//     $(this).addClass("enlarge");
//   });
//
//   $('img .enlarge').click(function(event) {
//     event.preventDefault();
//     $(this).siblings().show();
//     $(this).removeClass("enlarge");
//
//   });
//
//
// });
//
  // $('.tab').click(function() {
  //   var $tab = $(this); /*store tab we click on in variable */
  //
  //   var index = $tab.index(); /*index of <li. we just clicked */
  //
  //   var $tab_content = $('.tab-section').eq(index); /*grab respective tab-section at same index*/
  //
  //   if ( !$tab.hasClass('active') ) {
  //     $tab.addClass('active');
  //     $tab.siblings().removeClass('active');
  //     $tab_content.addClass('active');
  //     $tab_content.siblings().removeClass('active');
  //
  //   }
  //
  //
  // });
//   $(".box").eq(0).click(function (event) {
//     event.preventDefault();
//     $(this).css("background-color", "blue");
//
//   });
//
//   $(".box select").eq(1).change(function (){ //doesnt need prevent default because there isn't a default action associated with HTML element
//   $(this).closest(".box").css("background-color", "green");
//
// });
//
// $(".box").eq(2).dblclick(function(event) {
//   event.preventDefault();
//   $(this).css({"transform": "scale(2.5)", "background-color": "black"});
//
// });
//
// $(".box").eq(3).hover(function(event) { //mouseover automatic with hover
//   event.preventDefault();
//   $(this).css("transform", "scale(0.5)");
// }, function(event) {      //mouseout automatic when added to hover function?
//   $(this).css("transform", "scale(1.5)");
// }
//
// );
//
// $(".box").eq(4).hover(function(event) { //mouseover
//   event.preventDefault();
//   $(this).css("opacity", "(0.5)");
// }, function(event) {      //mouseout
//   $(this).css("opacity", "(1.0)");
// }
//
// );
//
// $(".box").eq(5).on("click mouseout", function() {
//   console.log("hi ya'll");
// });

});
