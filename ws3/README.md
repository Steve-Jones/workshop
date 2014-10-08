Overview of ws3

* created ws3 in repository
* created node library to access database
* created module for database communication
* created index.js
* created NODE_PATH
* created http-server.js
* created http-client.js
* created a dbHandler function in the server file
* dbHandler function converted the sql to json
* modified program arguments to include sql
* added a handlerType for sql
* created a db_handler in the client
* used this to parse the data
* create getUser function
* created get Users function
* created printUser function
* added fname and lname parameters to function

index.js
--------
Connected to the database with the pg module and the connString of the local student database I created. In getUsers, the database was queried for the info from the user table as well as the address. getUser does the same thing except it selects the specific fname and lname that gets passed from the command line. The printUsers function creates an array and runs through all the users and adds them to the array. Use JSON.stringify on the array of users and write the result.

http-server.js
--------------
The http-server.js file checks to see if there is a fname or lname passed and then decides whether to getUsers or getUser.

http-client.js
--------------
The http-client.js file accepts the arguements [h|rh|json|sql] [url] *[fname] *[lname] where fname and lname are optional. Added  headers: {fname: fname, lname: lname} to the options variable so they would be passed to client through request.

How to run
----------
To start the server: node http-server.js sql
To print all users info: node http-client.js sql http://localhost:4000
To print specific user info: node http-client.js sql http://localhost:4000 fname lname
