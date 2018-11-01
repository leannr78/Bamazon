// Load the NPM Package inquirer and mysql connection
var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root7007",
  database: "bamazon"
});
// Created a series of questions
connection.connect(function(err) {
    if (err) throw err;
    else console.log("connected");
    // run the start function after the connection is made to prompt the user
    start();
   // nextQuestion();
  });
  
  // function which prompts the user for product ID and quantity
  function start() {
    inquirer
      .prompt([
  {
    type: "input",
    name: "ID",
    message: "What is the ID of the product you would like to buy?"
  },
  {
    type: "input",
    name: "name",
    message: "BLAH"
   }
    ]
)   .then(function(answer) {
  console.log(answer.ID);
    // based on their answer, either call the bid or the post functions
   // if (answer.ID ) {
    //    console.log(answer);
      //buyUnits(answer.units,answer.ID);
    }
    //else {
    //  ();
    //}
   //   }
//)
 ) };

/*
function createProduct() {
    console.log("Inserting a new product...\n");
    var query = connection.query(
      "INSERT INTO products SET ?",
      {
        flavor: "Rocky Road",
        price: 3.0,
        quantity: 50
      },
      function(err, res) {
        console.log(res.affectedRows + " product inserted!\n");
        // Call updateProduct AFTER the INSERT completes
        updateProduct();
      }
    );
  
    // logs the actual query being run
    console.log(query.sql);
  }
  
  function updateProduct() {
    console.log("Updating all Rocky Road quantities...\n");
    var query = connection.query(
      "UPDATE products SET ? WHERE ?",
      [
        {
          quantity: 100
        },
        {
          flavor: "Rocky Road"
        }
      ],
      function(err, res) {
        console.log(res.affectedRows + " products updated!\n");
        // Call deleteProduct AFTER the UPDATE completes
        deleteProduct();
      }
    );
  
    // logs the actual query being run
    console.log(query.sql);
  }
  
  function deleteProduct() {
    console.log("Deleting all strawberry icecream...\n");
    connection.query(
      "DELETE FROM products WHERE ?",
      {
        flavor: "strawberry"
      },
      function(err, res) {
        console.log(res.affectedRows + " products deleted!\n");
        // Call readProducts AFTER the DELETE completes
        readProducts();
      }
    );
  }
  
  function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
  }
  */