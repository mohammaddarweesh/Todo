const express = require('express');
const mysqlconnection = require('../connection');
const Router = express.Router();

Router.get('/details/:id', (req, res) => {
    if (req.params.id) {
        mysqlconnection.query('SELECT * FROM todos where id =' + req.params.id.toString(),(err, rows, fields)=>{
            if (err) {
                res.status(500).send(err.message)
            }
            else{
                res.status(200).send(rows);
            }
        })
    }else{
        res.status(404).send('please provide an id')
    }
})

Router.post('/create',(req, res)=>
{
    const name = req.body.name
    const status = req.body.status
    const userid = req.body.userid
    if (name) {
        let query = "INSERT INTO todos (name,status, userid) VALUES ('" + name + "','"+ status +"','"+ userid +"')"
        mysqlconnection.query(query,(err)=>{
            if (err) {
                res.status(500).send('failed')
            }else{
                res.status(200).send('task created successfuly')
            }
        });
    }
    else{
        res.status(400).send('name is required');
    }
})
Router.post('/Edit',(req, res)=>
{
    const name = req.body.name
    const status = req.body.status
    const id = req.body.id
    if (name && id) {
        let x = "UPDATE todos SET name = '" + name + "' ,status = "+ status + " WHERE id = " + id
        mysqlconnection.query(x,(err)=>{
            if (err) {
                res.status(500).send('failed')
            }else{
                res.status(200).send('task updated successfuly ')
            }
        });
    }
    else{
        res.send('name does not exist');
    }
})

Router.post('/delete', (req, res)=>
{
    const id = req.body.id
    if (id) {
        let x = "DELETE FROM todos WHERE id =" + id
        mysqlconnection.query(x,(err)=>{
            if (err) {
                res.status(500).send('failed')
            }else{
                res.status(500).send('task deleted successfuly ')
            }
        });
    }
    else{
        res.send('id does not exist');
    }
})

module.exports = Router;