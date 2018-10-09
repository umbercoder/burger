
var orm = require("../config/orm.js");


var burger = { 
	// Select everything from the burgers table
	selectAll: function(table, cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},
	insertOne: function(colName, valOfCol, cb) {
		orm.insertOne("burgers", colName, valOfCol, function(res) {
			cb(res);
		});
	},
	updateOne: function(valOfCol, condition, cb) { 
		orm.updateOne("burgers", valOfCol, condition, function(res) {
			cb(res);
		});
	}
};

module.exports = burger;



// // Import the ORM to create functions that will interact with the database.
// var orm = require("../config/orm.js");

// var burger= {
//   selectAll: function(cb) {
//     orm.selectAll("burgers", function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   insertOne: function(cols, vals, cb) {
//     orm.insertOne("burgers", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   updateOne: function(objColVals, condition, cb) {
//     orm.updateOne("burgers", objColVals, condition, function(res) {
//       cb(res);
//     });
//   // },
//   // deleteOne: function(conditionVal, cb){
//   //   orm.deleteOne('burgers', 'id', conditionVal, function(res){
//   //     cb(res);
//   //   });
//   }
// };

// // Export the database functions for the controller (catsController.js).
// module.exports = burger;
