// importing express package
const express = require("express");

// initialisation
const app = express();

// application will now use json format data
app.use(express.json());

// port num where my server listens for every req-res
const port = 8081;

const toDoList = ["java", "javaScript", "Python"];

// GET Method
// http://localhost:8081/todos
app.get("/todos", (req, res)=> {
    // callback func
    res.status(200).send(toDoList.toString());
})

// POST Method
app.post("/todos", (req,res)=>{
    let newToDoItemList = req.body.items;
    toDoList.push(newToDoItemList);
    res.status(201).send({
        message: "Task Added Succesfully",
        name: "value"
    })

})

// DELETE Method
app.delete("/todos",(req, res)=>{
    const itemToDelete = req.body.item;
    toDoList.find((elem, index)=>{
        if(elem === itemToDelete){
            toDoList.splice(index, 1);
        }
    })
    res.status(204).send({
        message: `Deleted item "${itemToDelete}"`
    })
})

app.all("/todos",(req,res)=>{
    res.status(501).send("Not Implemented this feature");
})

app.all("*",(req,res)=>{
    res.status(501).send("Not Implemented this feature");
})

// app.get("/todos/create",())
// app.get("/todos/insert",())
app.listen(port, ()=>{
    // callback func
    console.log(`NodeJs Server started on the port ${port}`);
})

// npm i express or npm install express