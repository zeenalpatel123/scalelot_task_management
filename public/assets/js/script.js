$(function() {
  $('.task_content').slideUp();
  $('.task_title.active').next().slideDown();
  $('.task_title').click(function(j) {   
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.task_title').removeClass('active');
      $(this).next().slideUp();
    }
    else {
      $('.task_title').removeClass('active');
      $('.task_content').slideUp();
      $(this).addClass('active');
      $(this).next().slideDown();
    }     
  });
});
function toggleActive(Id, db) {
    var element = document.querySelector(Id);
    element.classList.toggle(db);
  }