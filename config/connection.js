//set up MySQL connection. This reads my burgers table.
var mysql = require("mysql")

var connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: "",
	database: "burgers_db"
});

//make connection, this is the call back?
connection.connect(function(err){
	if(err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + conncetion.threadId);
});

// export connection for our ORM to use.
module.exports = connection;