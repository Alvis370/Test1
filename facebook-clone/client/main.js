import { Template } from 'meteor/templating';

import './main.html';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL'
});

Template.categories.helpers({
    
    /*
    categories: ["Construction", "Manufacturing", "Wholesale", 
    "Retail Sales", "Finance", "Insurance", "Real Estate", "Health Care",
     "Education", "Government", "Others"]
     */
    categories: function() {
    	
    	return Categories.find({}, {"text" : 1, "_id" : 0});
    }
});

