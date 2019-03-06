// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var inquirer = require('inquirer');
var mysql = require('mysql');

// Define the MySQL connection parameters
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,

    // Your username
    user: 'root',

    // Your password
    password: 'password',
    database: 'bamazon'
});


// Prompt users with two messages.

//  Ask them the ID of the product they would like to buy.
//  Ask how many units of the product they would like to buy.

// Once order is placed, check qty of product to meet request.

// If not, log phrase `Insufficient quantity!`, prevent the order from going

// Else fulfill the customer's order.
// Update SQL database
// Show the customer the total cost of their purchase.

function select() {
    console.log("Let's Buy!");
    inquirer.prompt([{
            type: "input",
            name: "item_id",
            message: "Enter the ID of item to purchase:",
            // filter: Number
        },
        {
            type: "input",
            name: "qty",
            message: "Enter the quanity of the purchase:",
            // filter: Number
        }
    ]).then(function (input) {
        // console.log("You have selected item " + input.item_id)
        // console.log(input.qty + " of them");
        var buyItem = input.item_id;
        var buyQty = input.qty;
        var SQL = 'SELECT * FROM products WHERE ?';

        connection.query(SQL, {
            item_id: buyItem
        }, function (err, res) {
            // console.log(res);
            var productData = {}
            productData = res[0];
            console.log("       Purchasing: " + productData.product_name);
            console.log("Quanity Requested: " + buyQty);
            console.log("Quanity Remaining: " + productData.stock_quantity);
            if (buyQty <= productData.stock_quantity) {
                var totalPrice = buyQty * productData.price;
                var newQty = productData.stock_quantity - buyQty;
                console.log("Total Amount: $" + totalPrice);
                console.log("Total Remaning: " + newQty);

            } else {
                console.log('Insufficient quantity!');
            }
            // console.log("      Each Priced: "+productData.price);
            // console.log("We have " +productData.stock_quanity+" number of " +productData.product_name+ " left")
            // 
        });
    });
}

function purchase() {
    inquirer.prompt([{
        type: "confirm",
        name: "confirm",
        message: "Purchase inventory?",
        default: true
    }]).then(function (user) {
        if (user.confirm === true) {
            select();
        } else {
            console.log("Thanks, come back now y'all!");
        }
    });
};

// Display all of the items available for sale.
// Include the ids, names, and prices of products for sale.
function dispalyItems() {
    console.log("Here are our items:")
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        // console.log(res);
        for (var i = 0; i < res.length; i++) {
            console.log("     Item ID: " + res[i].item_id)
            console.log("Product Name: " + res[i].product_name)
            console.log("  Department: " + res[i].department_name)
            console.log("       Price: " + res[i].price)
            console.log("-----------------------------------------")
        }
        purchase();
    });
}

function bamazon() {
    console.log("Welcome to Bamazon, I am Geoff Besos!");
    dispalyItems();

}

connection.connect(function (err) {
    if (err) throw err;
    // console.log("connected as id " + connection.threadId);
    bamazon();
});