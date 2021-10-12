import Express from "express";
import Products from "./products.js";
import cors from 'cors';
import mysql, { createPool } from 'mysql';
import db from './database.js';

const app = Express();
app.use(cors());

const port = 3000;
const e = Express;
app.use(Express.json());
app.use(Express.urlencoded({extended:true}));


const pool = db.createDBPool(db.dbDetails, mysql);

let NewDb = {};
NewDb.all = () => {
return new Promise((resolve, reject) => {
    pool.query('select * from vehicles', (err, results) => {
        if(err){
            return reject(err);
        }
        return resolve(results);
    });
})
}

app.get("/", async (req, res) => {
    console.log("test");
    try{
        const results = await NewDb.all();
        console.log(results);
        res.json(results);
    }
    catch(err) {
        console.log(err)
    }
 
    res.json(Products);
})

// get single vehicle by id
// app.get("/:id", (req, res) => {
//     let currentProd = null;
//     console.log(req.params.id);
//     for(let i = 0; i < products.length; i++){
//         if(products[i].id == req.params.id){
//             return res.json(products[i])
//         }
//     }
//     console.log("test");
//     res.json(null);
// })


NewDb.insert = (valueObj) => {
    let queryStr = "INSERT INTO `vehicles` (`id`, `year`, `make`, `model`, `color`) VALUES (NULL, ?,?,?,? );"
    let values = [valueObj.year, valueObj.make, valueObj.model, valueObj.color]
    return new Promise((resolve, reject) => {
        pool.query(queryStr,values, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    })
    }
app.post("/", (req, res) => {
    NewDb.insert(req.body)
    res.redirect("http://localhost:8080");
})




app.listen(port, ()=> console.log("listening on port" + port))