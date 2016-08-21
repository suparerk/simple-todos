import { Template } from 'meteor/templating';
import '../imports/api/tasks.js';

import './body.html';

Template.body.helpers({
  tasks() {
    return Tasks.find({});
  },
});
