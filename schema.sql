DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name varchar(100),
  department_name VARCHAR(100),
  price decimal(6,2),
  stock_quantity INTEGER(11),
  PRIMARY KEY (item_id)
);

-- INSERT INTO products (product_name, department_name, price,stock_quantity)
-- VALUES ("Moby Dick", "Books", 8.75, 420);
-- INSERT INTO products (product_name, department_name, price,stock_quantity)
-- VALUES ("Fight Club", "Books", 12.75, 60);
-- INSERT INTO products (product_name, department_name, price,stock_quantity)
-- VALUES ("Shwinn", "Bikes", 108.75, 10);
-- INSERT INTO products (product_name, department_name, price,stock_quantity)
-- VALUES ("Trek", "Bikes", 288.78, 4);
-- INSERT INTO products (product_name, department_name, price,stock_quantity)
-- VALUES ("Pen", "Office", .75, 1420);
-- INSERT INTO products (product_name, department_name, price,stock_quantity)
-- VALUES ("Paper", "Office", .05, 9420);
-- INSERT INTO products (product_name, department_name, price,stock_quantity)
-- VALUES ("Phone", "Office", 88.75, 10);
-- INSERT INTO products (product_name, department_name, price,stock_quantity)
-- VALUES ("Servo Motor", "Manufacturing", 666.05, 11);
-- INSERT INTO products (product_name, department_name, price,stock_quantity)
-- VALUES ("Robot", "Manufacturing", 984.75, 1);
-- INSERT INTO products (product_name, department_name, price,stock_quantity)
-- VALUES ("PLC", "Manufacturing", 805.05, 9);

SELECT * FROM products;