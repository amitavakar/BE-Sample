
var myApp = angular.module('myApp', ['fg', 'ngSanitize', 'markdown']);
// Controller function and passing $http service , $scope var and Schema.
myApp.controller('MyController', function($scope, $http, mySchema) {

  // Something to store the input at.

  $scope.myFormData = {};

  // Expose the schema on the scope.

  $scope.mySchema = mySchema;
  
// calling submit function.
        $scope.formsubmit = function() {
			 

		// Posting data to php file
        $http({
          method  : 'POST',
          url     : 'submit.php',
          data    : $scope.myFormData, //form's data
          headers : {'Content-Type': 'application/x-www-form-urlencoded'} 
         })
          .success(function(data) {
			/*  
            if (data.errors) {
              // Showing errors.
              $scope.errorName = data.errors.name;
              $scope.errorUserName = data.errors.username;
              $scope.errorEmail = data.errors.email;
            } else {
              $scope.message = data.message;
            }
			*/
			alert(data);			
          });
		  
        };

});

myApp.value('mySchema', {
  "fields": [
	{
	  "type": "text",
	  "name": "name",
	  "displayName": "Name",	
	  "validation": {
		"messages": {
		  "required": "Please fill the field",
		  "maxlength": "error msg 1-256"
		},
		"required": true,
		"minlength": 1,
		"maxlength": 256
	  },
	  "placeholder": "Enter name here 1-256",
	  "tooltip": "Enter name here"
	},
	{
	  "type": "textarea",
	  "name": "textarea",
	  "displayName": "Textarea",
	  "validation": {
		"messages": {
		  "maxlength": "error msg 1-256"
		},
		"minlength": 1,
		"maxlength": 256
	  },
	  "placeholder": "Enter text here 1-256",
	  "tooltip": "Enter text here"
	},
	{
	  "type": "email",
	  "name": "email",
	  "displayName": "Email",
	  "validation": {
		"messages": {
		  "pattern": "Please fill the field"
		},
		"pattern": "^([a-z0-9_\\.-]+)@([\\da-z\\.-]+)\\.([a-z\\.]{2,6})$",
		"required": true
	  },
	  "placeholder": "Enter email here *.*@*.*",
	  "tooltip": "Enter email here"
	},
	{
	  "type": "password",
	  "name": "password",
	  "displayName": "Password",
	  "validation": {
		"messages": {
		  /*"pattern": "password [!@#$%^&] [0-9] [a-z] [A-Z]",*/
		  "required": "Please fill the field"
		},
		/*"pattern": "(?=.*\\d)(?=.*[!@#$%^&*\\-=()|?.\"';:]+)(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$",*/
		"required": true
	  },
	  "placeholder": "Enter password here",
	  "tooltip": "Enter password here"
	},
	{
	  "type": "text",
	  "name": "url",
	  "displayName": "Url",
	  "validation": {
		"messages": {
		  "pattern": "error msg",
		  "required": "Please fill the field"
		},
		"required": true,
		"pattern": "^(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\.-]*)*\\/?$"
	  },
	  "placeholder": "Enter url here https://www.*.*",
	  "tooltip": "Enter url here"
	},
	{
	  "type": "number",
	  "name": "number",
	  "validation": {
		"maxlength": 15,
		"messages": {
		  "pattern": "error msg",
		  "min": "minimum range",
		  "max": "maximum range"
		},
		"min": 0,
		"max": 999,
		"pattern": "^-{0,1}\\d*\\.{0,1}\\d+$"
	  },
	  "displayName": "Number",
	  "placeholder": "Enter number here 0-999",
	  "tooltip": "Enter number here"
	},
	{
	  "type": "selectlist",
	  "name": "selectlist",
	  "displayName": "Select List",
	  "options": [
		{
		  "value": "1",
		  "text": "Option 1"
		},
		{
		  "value": "2",
		  "text": "Option 2"
		},
		{
		  "value": "3",
		  "text": "Option 3"
		}
	  ],
	  "value": "1",
	  "tooltip": "Select an option"
	},
	{
	  "type": "radiobuttonlist",
	  "name": "radiobuttonlist",
	  "displayName": "Radio button",
	  "options": [
		{
		  "value": "male",
		  "text": "Male"
		},
		{
		  "value": "female",
		  "text": "Female"
		}
	  ],
	  "value": "male"
	},
	{
	  "type": "checkboxlist",
	  "name": "checklist",
	  "displayName": "Check box",
	  "options": [
		{
		  "value": "red",
		  "text": "Red"
		},
		{
		  "value": "blue",
		  "text": "Blue"
		},
		{
		  "value": "green",
		  "text": "Green"
		},
		{
		  "value": "yellow",
		  "text": "Yellow"
		}
	  ],
	  "value": {},
	  "tooltip": "Select an option"
	},
	{
	  "type": "hidden",
	  "name": "hidden",
	  "displayName": "Hidden"
	}	
  ]
});