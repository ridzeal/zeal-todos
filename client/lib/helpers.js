Template.body.helpers({
  tasks: function() {
    if(Session.get("hideCompleted")) {
      // If hide completed task, filter only incomplete
      return Tasks.find({checked: {$ne: true}}, {sort: {createdAt:-1}});
    } else {
      // Otherwise, display all
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  },
  hideCompleted: function() {
    return Session.get("hideCompleted");
  },
  incompleteCount: function() {
    return Tasks.find({checked: {$ne: true}}).count();
  }
});

Template.task.helpers({
  isOwner: function() {
    return this.owner === Meteor.userId();
  }
});
