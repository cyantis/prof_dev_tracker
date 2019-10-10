$(function () {
  $('#new_event').submit(function(e) {
    e.preventDefault();
    let formData = $(this).serialize();
    let posting = $.post('/events', formData);
    posting.done(function(data) {
      $("#eventName").text(data.name);
      $("#eventDate").text(data.date);
      $("#eventCategory").text(data.category);
      $("#eventDescription").text(data.description);
      $("#eventShared").text(data.shared);
      $('#new_event')[0].reset();
    });
  });
});

//$(function () {
//  $('.edit_event').submit(function(e) {
//    e.preventDefault();
//    let formData = $(this).serialize();
//    let posting = $.put('/events', formData);
//    posting.done(function(data) {
//      $("#eventName").text(data.name);
//      $("#eventDate").text(data.date);
//      $("#eventCategory").text(data.category);
//      $("#eventDescription").text(data.description);
//      $("#eventShared").text(data.shared);
//    });
//  });
//});
