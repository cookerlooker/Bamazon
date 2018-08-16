# Bamazon
Created during Week of Georgia Tech Coding Bootcamp.  The mission was to create an Amazon-like storefront using Node.js and MySQL.

An interactive storefront that runs in the console using Node.ja and MYSQL. This storefront sounds like......but is in no way related to the big A.

Getting Started
Clone repository
Run command in Terminal or Gitbash 'npm install'
Run command depending which mode you would like to be on:
Customer - 'npm run customer'
Manager - 'npm run manager'
Exective - 'npm run exective'
Run 'ctrl + c' to exit each mode



#How It Works:
##Install the appropriate NPM Packages with include NPM Install, NPM mysql and NPM inquirer.

##Three separate apps are a part of this program. The apps work in relationship to one another. The bamazonCustomer.js will allow customers to place an order from the Bamazon store. A check is then performed on the store inventory and the customer is either alerted that their order cannot be completed, or they are shown the total amount owed (but no credit card number is requested). Behind the scenes, the quantity ordered by the customer is deducted from the store quantity (which is stored in a SQL table). At the same time, the $ amount of the order is sent to seperate SQL table to allow the corportate executives to track earnings by department.

##Bamazon Customer.js Start Screen
![](screenshots/bamazonStart.png)






Technologies used
Node.js
Inquire NPM Package (https://www.npmjs.com/package/inquirer)
MYSQL NPM Package (https://www.npmjs.com/package/mysql)
Console.Table Package (https://www.npmjs.com/package/console.table)
Prerequisites
- Node.js - Download the latest version of Node https://nodejs.org/en/
- Create a MYSQL database called 'Bamazon', reference schema.sql
Built With
Visual Studio - Text Editor
MAMP
MySQLWorkbench
Terminal/Gitbash
Authors
Rochelle Schofield
