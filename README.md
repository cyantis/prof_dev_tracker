# Professional Development Tracker
_Professional Development Tracker_ (PDT) is an app to help your staff track their professional development via learning event logs.

## Installation

1. Clone or download the repo: https://github.com/cyantis/prof_dev_tracker

2. In your terminal, navigate to the app's directory and execute:

    $ bundle

to install dependencies.

3. To create and seed the database, type:

    $ rails db:migrate

    and then, if you wish to make use of some basic learning categories and see what the app looks like when populated with some data:

    $ rails db:seed

4. Launch a local server by executing:

    $ rails s

and then visit `http://localhost:3000`in your browser to access the _PDT_ site.

To end the server session, type `ctrl-c`.

## Usage

First time users ("employees") will need to create an account by supplying info such as username, password, location, and manager. Returning employees login via their username and password.

Once logged in, the latest learning "events"--organization-wide--will be displayed. From this home page, the employee can:

1. Visit their `Learning Profile`, which includes info about the employee, as well as their learning log. For employees that manage others, they will also see a list of the employees they oversee, including their learning logs.
2. `Log New Learning`, which tracks the title of the learning "event", the date, the type of learning (e.g "conference attendee" or "book"), a description of the employee's learning experience, and a checkbox to indicate whether or not they have shared some of their insights with their team.
3. Edit their profile, which includes the ability change their personal information, update their password, and select a new location and/or manager.
4. Explore other employees' learning.

Each employee can create learning "events" and edit or delete these. Whether creating or editing a learning "event", employees always have the opportunity to `Cancel` any additions/changes.

Clicking `Logout` from anywhere in the app ends the employee's session.

## For Developers

This app is built with Ruby on Rails, but it also relies on Javascript for a number of displays. There are also JSON feeds for easy API harvesting on these pages:

1. /employees/:id.json
2. /events
3. /events/:id.json
3. /locations.json

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/cyantis/prof_dev_tracker.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
