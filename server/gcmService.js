// Load modules

var gcm = require('node-gcm');

// Replace these with your own values.
var apiKey = "Project API Key";
var deviceID = "Device's Registration ID";

var service = new gcm.Sender(apiKey);
var message = new gcm.Message();
message.addData('title', 'Hello, World');
message.addData('body', 'This is a notification that will be displayed ASAP.');

service.send(message, { registrationTokens: [ deviceID ] }, function (err, response) {
	if(err) console.error(err);
	else 	console.log(response);
});
