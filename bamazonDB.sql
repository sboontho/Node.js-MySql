DROP DATABASE IF EXISTS bamazon_db;
-- Creates the "bamazon_db" database --
CREATE DATABASE bamazon_db;
USE bamazon_db;

-- Creates the table "products" within bamazon_db --
CREATE TABLE products (
 -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30),
  -- Makes an numeric column called "price" --
  price INTEGER(10),
  stock_quantity INTEGER(11) NOT NULL,
  -- Sets id as this table's primary key which means all data contained within it will be unique --
  PRIMARY KEY (item_id)
);

-- Creates new rows containing data in all named columns --
INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "HP Labtop", "Computer", 600, 400);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "MAC Labtop", "Computer", 800, 400);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, "DELL Labtop", "Computer", 700, 400);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "ACER Labtop", "Computer", 500, 400);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "SAMSUNG Labtop", "Computer", 600, 400);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6, "HP Desktop", "Computer", 800, 400);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7, "MAC Desktop", "Computer", 900, 400);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8, "DELL Desktop", "Computer", 800, 400);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9, "ACER Desktop", "Computer", 700, 400);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "SAMSUNG Desktop", "Computer", 800, 400);

SELECT * FROM products;
