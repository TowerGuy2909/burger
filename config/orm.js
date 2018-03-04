//Import MySQL connection
var connection = require("../config/connection.js");

//substitutes values for question marks as place holders. Loops through a array to make it a string.
function printQuestionMarks(num){
	var arr = [];

	for (var i = 0; i < num; i++){
		arr.push("?");
	}
	return arr.toString();
}

//takes an objects properties and values and turns them in to sql.
function objToSql(ob){
	var arr = [];

	// finds every property and its value and pushes them an array
	for (var key in ob){
		var value = ob[key];
		// check to skip hidden properties
		if (Object.hasOwnProperty.call(ob, key)){
			// in case the string is more then one word with a space inbetween, adds quotes out side of it to keep together.
			if (typeof value === "string" && value.indexof(" ") >= 0) {
				value = "'" + value + "'";
			}
			// i.e. {name: "Black Mage"} turns into ["name= 'Black Mage'"]
			// i.e. {intelligence: 20} turns into ["intelligence=20"]
			arr.push(key + "=" + value);
		}
	}
	// returns a string from the array pushed from the properties and its values
	return arr.toString();
}

var orm = {
	selectAll: function(tableInput, cb){
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, result){
			if (err){
				throw err;
			}
			cb(result)
		});
	},
	insertOne: function(table, cols, vals, cb){
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

		console.log(queryString);

		connection.query(queryString, vals, function(err, result){
			if(err){
				throw err;
			}

			cb(result);
		});
	},

	// an example of objColVals would be {name: 'Black Mage', intellegence: 20}
	updateOne: function(table, objColVals, condition, cb){
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;

		console.log(queryString);
		connection.query(queryString, function(err, result){
			if(err){
				throw err;
			}

			cb(result);
		});
	},

//not sure if the delete function is need for this app

	// delete: function(table, condition, cb){
	// 	var queryString = "DELETE FROM " + table;
	// 	queryString += " WHERE ";
	// 	queryString += condition;

	// 	connection.query(queryString, function(err, result){
	// 		if(err){
	// 			throw err;
	// 		}

	// 		cb(result);
	// 	});
	// }
};

// export the orm object for the model (burger.js)
module.exports = orm;