# Professional Development Tracker
_Professional Development Tracker_ (PDT) is an app to help your staff track their professional development and learning.

## Installation

1. Clone or download the repo: https://github.com/cyantis/prof_dev_tracker

2. In your terminal, navigate to the app's directory and execute:

    $ bundle

to install dependencies.

3. To create and seed the database, type:

    $ rails db:migrate

    and then:

    $ rails db:seed

4. Launch a local server by executing:

    $ rails s

and then visit `http://localhost:3000`in your browser to access the _PDT_ site.

To end the server session, type `ctrl-c`.

## Usage

First time users ("employees") will need to create an account by supplying info such as username, password, location, and manager. Returning employees login via their username and password.

Once logged in, the latest learning "events"--organization-wide--will be displayed. From this home page, the Employee can:

1. Create a new class by clicking `New Class`. Classes require a `Class Title` and `Class Type` and have optional fields for `Playlist` and `Poses`.
2. View a previous class by clicking on the class title.
3. End the session by clicking `Logout`.

By visiting a previous class page, the Teacher can:

1. `Edit` or `Delete` the class.
2. Return to the home page (`Back to Classes`).
3. Add date-stamped notes to the class (`Add Note`).

Once a note has been added to a class, the Teacher can:

1. Edit the note (`Edit Note`).
2. Delete the note (`Delete Note`).

Whether creating or editing a class or note, Teachers always have the opportunity to `Cancel` any additions/changes.

Clicking `Logout` from anywhere in the app ends the Teacher's session.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/cyantis/yoga_class_creator.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
