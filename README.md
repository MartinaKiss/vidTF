Tools required to run the application:
- Node.js installed
- NPM installed
- MySQL database

Running the application:
- Download the repository from https://github.com/MartinaKiss/vidTF as a zip package or clone it with the git clone command
- Create a table in your MySQL database with the following command:

  CREATE TABLE users (userid INT UNSIGNED AUTO_INCREMENT PRYMARY KEY, username VARCHAR(50) NOT NULL, fullname VARCHAR(100) NOT NULL, vidregnumber VARCHAR(10) NOT NULL, registrationaccepted VARCHAR(1), eligfordiscount VARCHAR(1), discountstart TIMESTAMP, discountend TIMESTAMP);

- Update the following part in the script.js file according to your database properties:

  var con = mysql.createConnection({
    host: "localhost",
    user: "your user name",
    password: "your password",
    database: "your table name"
  });

- Run the following command in a terminal or command line opened in the project directory:
  node script.js

  After running the command, the application will be available on port 3000.
