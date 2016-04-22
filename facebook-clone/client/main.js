import { Template } from 'meteor/templating';

import './main.html';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});



