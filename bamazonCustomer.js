//Obtain appropriate NPM packages

var inquirer = require('inquirer');
var mysql = require('mysql');

// Create the connection to database
var connection = mysql.createConnection({
	host: 'localhost',
	port: 8889,
	user: 'root',
	password: 'root',
	database: 'bamazonDB'
});

// Establish connection// connect to the mysql server and sql database


connection.connect(function(err){
    if (err) throw err;
    console.log('connected as id: ' + connection.threadId)
    showProducts();
});

// function which prompts the user for what action they should take

function showProducts(){
    //prints the items for sale and their details
    connection.query('SELECT * FROM Products', function(err, res){
      if(err) throw err;
    
      console.log('_.~"~._.~"~._.~Welcome to BAMazon~._.~"~._.~"~._')
      console.log('---------------------Please Place Your Order-------------------------')
    
      for(var i = 0; i<res.length;i++){
        console.log("ID: " + res[i].item_id + " | " + "Designer: " + res[i].designer_name + " | " + "Product: " + res[i].product_name + " | "  + "Department: " + res[i].department_name + " | " + "Price: " + res[i].price + " | " + "Quantity Available: " + res[i].stock_quantity);
        console.log('-------------------------------------------------------------------------------')
      }
    })
}

console.log(' ');
inquirer.prompt([
  {
    type: "input",
    name: "id",
    message: "What is the ID of the product you would like to purchase?",
    validate: function(value){
      if(isNaN(value) == false && parseInt(value) <= res.length && parseInt(value) > 0){
        return true;
      } else{
        return false;
      }
    }
  },
  {
