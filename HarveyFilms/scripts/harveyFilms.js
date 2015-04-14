$(document).ready(function($) {
  
  $('.tab').click(function() {
    var $tab = $(this); /*store tab we click on in variable */
    
    var index = $tab.index(); /*index of <li. we just clicked */
    
    var $tab_content = $('.tab-section').eq(index); /*grab respective tab-section at same index*/
    
    if ( !$tab.hasClass('active') ) {
      $tab.addClass('active');
      $tab.siblings().removeClass('active');
      $tab_content.addClass('active');
      $tab_content.siblings().removeClass('active');
      
    }
    
    
  });

});