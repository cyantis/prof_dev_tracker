$(function () {
  $('#new_event').submit(function(e) {
    e.preventDefault();
    let formData = $(this).serialize();
    let posting = $.post('/events', formData);
    posting.done(function(data) {
      let newEvent = new Event(data);
      let newRender = newEvent.postHTML(); $('#newEventPost').html(newRender); $('#new_event')[0].reset(); $("#newEventBtn").attr("disabled", false);
    });
  });
});


$(function() {
  $(".datepicker").datepicker();
});

$(function() {
  $(document).ready(function() {
    $.get("/events.json", function(data) {
      const event = data;
      for(let i = (event.length - 1); i > (event.length - 11); i--){
        let e = event[i]
        let employeeArr = e["employees"]
        $("#orgLearningList").append(`<li><a href=events/${e["id"]}>${employeeArr[employeeArr.length - 1]["name"]} | ${e["name"]}</a></li>`);
      }
    });
  });
});

class Event {
  constructor(e){
    this.id = e.id;
    this.name = e.name;
    this.date = e.date;
    this.category = e.category;
    this.description = e.description;
    this.shared = e.shared;
  }
}

Event.prototype.postHTML = function() {
    return (`<p>${this.name}</p>
    <p>${this.date}</p>
    <p>${this.category}</p>
    <p>${this.description}</p>`);
}



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
