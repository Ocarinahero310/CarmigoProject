import Express from "express";
import Products from "./products.js";
import cors from 'cors';
import products from "./products.js";
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

app.get("/", (req, res) => {
    // res.send("HelloWorld");
    console.log("test");
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
    console.log(req.body.test);
    res.status(201).send('Created User');
})
//GET, PUT, POST, DELETE


app.listen(port, ()=> console.log("listening on port" + port))
console.log("Hello world");
