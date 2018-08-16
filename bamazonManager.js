
//Obtain appropriate NPM packages
//The inquirer module will be required to be able to ask questions.

var inquirer = require('inquirer');

//mySQL module will be required to be able to update the db of products.

var mysql = require('mysql');

//This module for the table method will be required so that the products from the db are displayed in table format
require("console.table");
 
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
    //console.log('connected as id: ' + connection.threadId)
    //run the showProducts function after connection is made to prompt the user
    showProducts();
});

//Function to list all Products

function showProducts(){
    //prints the items for sale and their details
    connection.query('SELECT * FROM products', function(err, res){
      if(err) throw err;
      console.log(" ");
      console.log(' _.~"~._.~"~._.~WELCOME TO THE BAMazon ONLINE STORE_.~"~._.~"~._.~');
      console.log("                 Below is our current inventory.");
      console.log("* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *");
      console.table(res);
      console.log("* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *");
      console.log(" ");
    //run the function for customer product selection, with all the products from the db.
    customerProdSelect(res);
    });
  }

// Function for customer product selection
function customerProdSelect(inventory) {
  inquirer
  .prompt([
    {
      type: "input",
      name: "choice",
      message: "Enter the Item ID of the product you would like to purchase.",
      validate: function(val) {
        return !isNaN(val);
      }
    }
  ])
 .then(function(val) {
   var choiceId = parseInt(val.choice);
   var product = checkInventory(choiceId, inventory);
   console.log(product);
   if (product) {
     //run the function for choice quantity after the product is selected.
     customerQuantSelect(product);
 }
 else {
   // if the product id does not match the DB notify user to make another selection.
   console.log(" ");
   console.log(" ");
      console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ");      console.log("-----------------------------------------------------------------");
   console.log("That item is not in the Inventory, please make another selection.");
      console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ");      console.log("-----------------------------------------------------------------");
   console.log(" ");
   console.log(" ");
   showProducts(); 
     }
   }); 
 }

// Function for customer quantity selection
function customerQuantSelect(product) {
  inquirer
  .prompt([
    {
      type: "input",
      name: "quantity",
      message: "How many would you like to purchase?",
      validate: function(val) {
        return val > 0;
      }
    }
  ])
  .then(function(val) {
    var quantity = parseInt(val.quantity);
  
    // if the quantity does not match the amount available notify the user to make another selection.
    if (quantity > product.stock_quantity) {
      console.log(" ");
      console.log(" ");
      console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ");
      console.log("No stock available for this item, please make another selection.");
      console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ");
      console.log(" ");
      console.log(" ");
      showProducts();

    }
    else {
      //run the function to make the purchase.
      makePurchase(product, quantity); 
    }
  });
}

// Function to finalize the purchase of the user selection
function makePurchase(product, quantity) {
  connection.query(
    "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
    [quantity, product.item_id],
    function(err, res) {
      console.log(" ");
      console.log(" ");
      console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - -  - ");
      console.log("Thank you for your purchase of " + quantity + " " + product.product_name + "'s!");
      console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - -- - ");
      console.log(" ");
      console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - -- - ");
      console.log("Your total today is $" + product.price * quantity);
      console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - - -- - ");

        process.exit();
    }
  );
}

// Function that calculates the total cost of customer purchase.
function purchaseCost(price, quantity) {
  connection.query(
    "CALCULATE total"
    
  )
}


// Function to check the inventory
function checkInventory(choiceId, inventory) {
  for (var i = 0; i < inventory.length; i++) {
    if (inventory[i].item_id === choiceId) {
      return inventory[i];
    }
  }
  return null;
}
 




