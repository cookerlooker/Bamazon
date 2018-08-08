DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    designer_name VARCHAR(100) NOT NULL,
    product_name VARCHAR (100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL (10,2) default 0,
    stock_quantity INT default 0,
    PRIMARY KEY (item_id)
);

-- Creates new rows



INSERT INTO products(designer_name, product_name, department_name, price, stock_quantity) VALUES("Salvatore Ferragamo", "Acorn", "Men's shoes", "540", "150");
INSERT INTO products(designer_name, product_name, department_name, price, stock_quantity) VALUES("Bally", "Bolt", "Men's shoes", "550", "4");
INSERT INTO products(designer_name, product_name, department_name, price, stock_quantity) VALUES("Chanel", "Brocade Lace Up Boot", "Women's shoes", "645", "75");
INSERT INTO products(designer_name, product_name, department_name, price, stock_quantity) VALUES("7 for all mankind", "Dojo in Santiago Canyon", "Women's casuals", "159.95", "467");
INSERT INTO products(designer_name, product_name, department_name, price, stock_quantity) VALUES("Lancome", "Red Stilleto Lipstick", "Cosmetics", "24", "1000");
INSERT INTO products(designer_name, product_name, department_name, price, stock_quantity) VALUES("MAC", "Flat Out Fabulous Lipstick", "Cosmetic", "18.50", "0");
INSERT INTO products(designer_name, product_name, department_name, price, stock_quantity) VALUES("Marc Jacobs", "Cross Body Bag", "Handbags", "196.90", "37");
INSERT INTO products(designer_name, product_name, department_name, price, stock_quantity) VALUES("J Crew", "Crystal Drop Earrings", "Jewelry", "65", "12");
INSERT INTO products(designer_name, product_name, department_name, price, stock_quantity) VALUES("Tom Ford", "Vert Boheme", "Perfume", "235", "90");
INSERT INTO products(designer_name, product_name, department_name, price, stock_quantity) VALUES("Robert Piguet", "Fracas", "Perfume", "89.99", "0");