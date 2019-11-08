'use strict';

//generic fetch function
const getData = (url, callback) => {
  let empArr;
  fetch(url)
    .then(response => response.json())
    .then(json => callback(json))
}
//to-do create employee / event class, push data into master arrays
const cb = (data) => data;

//create event array
const employeesArray = getData('/employees.json', cb);

// create new learning event w/ ajax
$(function () {
  $('#new_event').submit(function(e) {
    e.preventDefault();
    let formData = $(this).serialize();
    let posting = $.post('/events', formData);
    posting.done(function(data) {
      let newEvent = new Event(data);
      let newRender = newEvent.postHTML();
      console.log(newRender);
      if(newEvent.id === undefined){
        alert("All fields are required, please try again.");
        $("#newEventBtn").attr("disabled", false);
      }
      else{
        $('#newEventPost').html(newRender);
        $('#new_event')[0].reset();
        $("#newEventBtn").attr("disabled", false);
      }
    });
  });
});

//jQuery datepicker for learning event date
$(function() {
  $(".datepicker").datepicker();
});


//populate the index page with the 10 most recently updated learning events
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

//populate employee show page with their learning events
$(function() {
  $(document).ready(function() {
    let path = window.location.pathname;
    $.get(`${path}.json`, function(data) {
      const events = data["events"];
      for(let i = (events.length - 1); i < events.length; i--){
        let e = events[i]
        $("#employeeLearningList").append(`<li><a href=${path}/events/${e["id"]}>${e["name"]} | ${e["date"]}</a></li>`);
      }
    });
  });
});

//populate manager show page with their employees' learning events
$(function() {
  $(document).ready(function() {
    let path = window.location.pathname;
    let managerId;
    $.get(`${path}.json`, function(data) {
      managerId = data.id;
    });
    $.get("/employees.json", function(data) {
      const employees = data;
      let empArr = employees.filter(e => e.manager_id === managerId);
      for(let e of empArr){
        $("#employeesLearningList").append(`<p>${e.name}</p><ul id=${e.id}Learning></ul>`);
        for(event of e.events){
          $(`#${e.id}Learning`).append(`<li><a href=/events/${event.id}>${event.name}</a></li>`);
        }
      }
    });
  });
});

//event class constructor
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

//event class method for html formatting/posting
Event.prototype.postHTML = function() {
  return (`<h1>${this.name}</h1>
    <ul>
      <li>${this.date}</li>
      <li>${this.category}</li>
      <li>${this.description}</=li>
    </ul>`
  );
}

//display comments on event show page
$(function() {
  $(document).ready(function() {
    let path = window.location.pathname;
    let currentUser = $('#currentUser').attr('value')
    $.get(`${path}.json`, function(data) {
      const comments = data["comments"];
      for(let i = (comments.length - 1); i < comments.length; i--){
        let c = comments[i];
        $("#eventComments").append(`<p id=comment${c.id}>${c.updated_at.slice(0,10)} | ${c.content}</p>`);
        if(c.employee_id === parseInt(currentUser)){
          $(`#comment${c.id}`).append(` | <a href=${path}/comments/${c.id}/edit><button>Edit Comment</button></a>`);
        }
      }
    });
  });
});
