Template.body.events({
  "submit .new-task": function(event) {
    event.preventDefault();

    // Get Value
    var text = event.target.text.value;

    // Insert to collection
    Meteor.call("addTask", text);

    // Clear form
    event.target.text.value = "";
  },
  "change .hide-completed input": function(event) {
    Session.set("hideCompleted", event.target.checked);
  }
  });

  Template.task.events({
  "click .toggle-checked": function() {
    Meteor.call("setChecked", this._id, !this.checked);
  },
  "click .delete": function() {
    Meteor.call("deleteTask", this._id);
  },
  "click .toggle-private": function() {
    Meteor.call("setPrivate", this._id, !this.private);
  }
});
