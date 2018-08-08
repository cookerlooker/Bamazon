# Bamazon

An interactive storefront that runs in the console using node. This storefront sounds like......but is in no way related to the big A.

#How It Works:
##Install the appropriate NPM Packages with include NPM Install, NPM mysql and NPM inquirer.

##Three separate apps are a part of this program. The apps work in relationship to one another. The bamazonCustomer.js will allow customers to place an order from the Bamazon store. A check is then performed on the store inventory and the customer is either alerted that their order cannot be completed, or they are shown the total amount owed (but no credit card number is requested). Behind the scenes, the quantity ordered by the customer is deducted from the store quantity (which is stored in a SQL table). At the same time, the $ amount of the order is sent to seperate SQL table to allow the corportate executives to track earnings by department.

###bamazonCustomer.js Screenshot