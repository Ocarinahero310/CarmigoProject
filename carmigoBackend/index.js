import Express from "express";
import Products from "./products.js";

const app = Express();
const port = 3000;
const e = Express;
app.use(Express.json());
// app.use(Express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    // res.send("HelloWorld");
    res.json(Products);
})
app.get("/products/:id", (req, res) => {
    // res.send("HelloWorld");
    res.json(Products.find((product) =>{
        return + req.params.id === product.id   
    }));

app.post("/add", (req, res) => {
    console.log(req.body.id);
    res.send('hello world');
})
})
//GET, PUT, POST, DELETE


app.listen(port, ()=> console.log("listening on port" + port))
console.log("Hello world");
console.log("hello dad");