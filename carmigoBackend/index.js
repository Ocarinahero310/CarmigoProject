import Express from "express";
import Products from "./products.js";
import cors from 'cors';
import products from "./products.js";
import mysql, { createPool } from 'mysql';
// import db from './database.js'
// import bodyParser, { urlencoded } from "body-parser";


const app = Express();
app.use(cors());

const port = 3000;
const e = Express;
app.use(Express.json());
// app.use(bodyParser.json())
// app.use(urlencoded({extended: false}));
// app.use(Express.urlencoded({ extended: true }))
app.use(Express.urlencoded({extended:true}));


// var mysql = require("mysql");
// import mysql from 'mysql';
// var connection = mysql.createConnection({
//     host: 'sql5.freemysqlhosting.net',
//     user: 'sql5443582',
//     password: 'm35eyckA33',
//     database: 'sql5443582'
//   });
// var connection = db.createDB(db.dbDetails);

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'm35eyckA33',
    user: 'sql5443582',
    database: 'sql5443582',
    host: 'sql5.freemysqlhosting.net',
    port: '3306'
});
let db = {};
db.all = () => {
return new Promise((resolve, reject) => {
    pool.query('select * from vehicles', (err, results) => {
        if(err){
            return reject(err);
        }
        return resolve(results);
    });
})
}
// var connection = mysql.createConnection({
//     host: 'sql5.freemysqlhosting.net',
//     user: 'sql5443582',
//     password: 'm35eyckA33',
//     database: 'sql5443582'
//   });


app.get("/", async (req, res) => {
    // res.send("HelloWorld");
    console.log("test");
    // console.log(connection);
    try{
        // console.log(connection);
        // connection.connect()
        const results = await db.all();
        console.log("*******************");
        console.log("*******************");
        console.log("*******************");
        console.log("*******************");
        console.log("*******************");
        console.log("*******************");
        console.log(results);
        res.json(results);
        // connection.end();
    }
    catch(err) {
        console.log("$*$*$*#*$#U$*&)(*#()*$)(#*)($*#()*()");
        console.log(err)
    }
 
    res.json(Products);
})

app.get("/:id", (req, res) => {
    // res.send("HelloWorld");
    let currentProd = null;
    console.log(req.params.id);
    for(let i = 0; i < products.length; i++){
        if(products[i].id == req.params.id){
            return res.json(products[i])
        }
    }
    console.log("test");
    res.json(null);
})
// app.get("/products/:id", (req, res) => {
//     // res.send("HelloWorld");
//     res.json(Products.find((product) =>{
//         return + req.params.id === product.id   
//     }
//     )
//     )
// }
// )

// app.post("/add", (req, res) => {
//     var id = req.body.id;
//     console.log(req.body.id);
//     res.send('hello world');
// })
app.post("/", (req, res) => {
    console.log(req.body);
    // console.log(req.body.test);
    // console.log(req.body.message);
    // console.log(req.body.mail);
    res.redirect("http://localhost:8080");
})
//GET, PUT, POST, DELETE




app.listen(port, ()=> console.log("listening on port" + port))
console.log("Hello world");
