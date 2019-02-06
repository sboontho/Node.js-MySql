var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "bamazon_DB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

// function which prompts the user for what action they should take
function start() {
    inquirer
        .prompt({
            name: "postOrBid",
            type: "rawlist",
            message: "What is the id of the product you would like to buy?",
            choices: ["1_HP_Labtop", "2_MAC_Labtop", "3_DELL_Labtop", "4_ACER_Labtop",
                "5_SAMSUNG_Labtop", "6_HP_Desktop", "7_MAC Desktop", "8_DELL_Desktop",
                "9_ACER_Desktop", "10_SAMSUNG_Desktop"
            ]
        })
        .then(function (answer) {
            // based on their answer, either call the bid or the post functions
            if (answer.postOrBid === "1_HP_Labtop") {
                var custSelect = 1;
            }
            if (answer.postOrBid === "2_HMAC_Labtop") {
                var custSelect = 2;
            }
            if (answer.postOrBid === "3_DELL_Labtop") {
                var custSelect = 3;
            }

            if (answer.postOrBid === "4_ACER_Labtop") {
                var custSelect = 4;
            }
            if (answer.postOrBid === "5_SAMSUNG_Labtop") {
                var custSelect = 5;
            }

            if (answer.postOrBid === "6_HP_Desktop") {
                var custSelect = 6;
            }

            if (answer.postOrBid === "7_MAC_Desktop") {
                var custSelect = 7;
            }

            if (answer.postOrBid === "8_DELL_Desktop") {
                var custSelect = 8;
            }

            if (answer.postOrBid === "9_ACER_Desktop") {
                var custSelect = 9;
            }

            if (answer.postOrBid === "10_SAMSUNG_Desktop") {
                var custSelect = 10;
            }

        });




// function to handle number of product want to buy
function numOrder() {
    // prompt for info about the item want to buy
    inquirer
        .prompt({
                    name: "item",
                    type: "input",
                    message: "How many of products you want to buy?"
                })

            
            .then(function (answer) {
                    // when finished prompting, insert a new item into the db with that info
                    connection.query(
                        "UPDATE products SET ?WHERE ?",
                        [
                            {
                         stock_quantity:  400 -answere.item
                            },
                            {
                                item_id: answere.custSelect
                            }

                        ],

                        function (err) {
                            if (err) throw err;
                            console.log("Your stock_quantity was created successfully!");
                            // re-prompt the user for if they want to bid or post
                            start();
                        }
                    );


                });
            }
        }
                //function bidAuction() {
                // query the database for all items being auctioned
                /*   connection.query("SELECT * FROM auctions", function (err, results) {
                       if (err) throw err;
                       // once you have the items, prompt the user for which they'd like to bid on
                       inquirer
                           .prompt([{
                                   name: "choice",
                                   type: "rawlist",
                                   choices: function () {
                                       var choiceArray = [];
                                       for (var i = 0; i < results.length; i++) {
                                           choiceArray.push(results[i].item_name);
                                       }
                                       return choiceArray;
                                   },
                                   message: "What auction would you like to place a bid in?"
                               },
                               {
                                   name: "bid",
                                   type: "input",
                                   message: "How much would you like to bid?"
                               }
                           ])
                           .then(function (answer) {
                               // get the information of the chosen item
                               var chosenItem;
                               for (var i = 0; i < results.length; i++) {
                                   if (results[i].item_name === answer.choice) {
                                       chosenItem = results[i];
                                   }
                               }

                               // determine if bid was high enough
                               if (chosenItem.highest_bid < parseInt(answer.bid)) {
                                   // bid was high enough, so update db, let the user know, and start over
                                   connection.query(
                                       "UPDATE auctions SET ? WHERE ?",
                                       [{
                                               highest_bid: answer.bid
                                           },
                                           {
                                               id: chosenItem.id
                                           }
                                       ],
                                       function (error) {
                                           if (error) throw err;
                                           console.log("Bid placed successfully!");
                                           start();
                                       }
                                   );
                               } else {
                                   // bid wasn't high enough, so apologize and start over
                                   console.log("Your bid was too low. Try again...");
                                   start();
                               }
                           });
                   }); */
                //}