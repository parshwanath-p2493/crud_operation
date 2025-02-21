require('./connection');
const User = require('./input');
const express = require('express');
const server = express();
const swaggerui =require("swagger-ui-express");
const {swaggerDocs}=require("./swagger.js")

//const { swaggerDocs } = require("./swagger.js");
//const swaggerUi = require("swagger-ui-express");

//middleware 
server.use(express.json());

//Test Server 
server.get('/', function (req, res) {
    res.send('Hello World 123456')
})
server.listen(3000, () => {
    console.log('Server Running at 3000')
})

//operations

server.post('/addNewStudent', async function (req, res) {
    try {
        const data = req.body;
        await User.create(data);
        return res.send("Successfully Student Added")
    } catch (error) {
        return res.send(error)
    }
})

server.get('/getStudent/:name', async function (req, res) {
    try {
        const name = req.params.name;
        const data = await User.find({ name: name });
        if (!data) {
            return res.status(404).json({ message: "Student data not found" })
        }
        return res.json({
            message: "All Student details",
            data: data
        })
    } catch (error) {
        return res.send(error).json({ error: "Not fount" })
    }
})
server.get('/getAllstudents', async function (req, res) {
    try {
        const data = await User.find()
        if (data.length === 0) {
            return res.status(404).json({ message: "Student data not found" })
        }
        res.json(data)
    } catch (error) {
        res.json({ error: "Internal Server error" })
    }
})
/*
server.put('/updatestudent/:id',async function (res,req) {
    try {
        const id=req.params.id;
        const newname=req.body.newname; 
        const upstd =await User.find({name:id})
        if(!upstd)
        {
            return res.status(404).json({message:"Not found"})
        }
        const updatestudent=await User.updateOne({"name":id},{$set:{"name":newname}});
        const data=await User.find({"name":newname});
    }
    catch(error){
        res.json({ error: "Internal Server error" })
    }
    
})
*/

server.put('/updatestudent/:id', async function (req, res) {
    try {
        const id = req.params.id;
        //  const newname=req.body.newname; 
        const upstd = await User.findOne({ _id: id })
        if (!upstd) {
            return res.status(404).json({ message: "Not found" })
        }
        //  const updatestudent=await User.updateOne({"name":id},{$set:{"name":newname}});
        //  const data=await User.find({"name":newname});
        const updatestudent = await User.findByIdAndUpdate(id, req.body, { new: true })
        return res.json(updatestudent)
    }
    catch (error) {
        res.json({ error: "Internal Server error" })
    }

})

server.delete('/deletestudent/:id', async function (req, res) {
    try {
        const id = req.params.id;
        const deletedstudent = await User.findByIdAndDelete(id);
        if (!deletedstudent) {
            return res.json({ message: "Student not found" })
        }
        return res.json({ message: " Student deleted succcessfully" })
    }
    catch(error){
          return res.json({ error: " Server error" })
    }


})

server.use('/api_dox', swaggerui.serve, swaggerui.setup(swaggerDocs))