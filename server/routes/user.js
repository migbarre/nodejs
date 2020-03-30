const express = require('express');
const User = require('../models/user');

const app = express();

app.get('/user', function(req, res) {
    User.find({}, (err, userDb) => {
        if (err) {
            res.status(400).json({
                sucess: false,
                message: 'Something went wrong',
                error: err
            });
        }

        res.status(200).json({
            sucess: true,
            users: userDb
        })
    });
})

app.post('/user', function(req, res) {
    let body = req.body;

    let user = new User({
        name: body.name,
        age: body.age,
        email: body.email
    });

    user.save((err, userDb) => {
        console.log(userDb);
        if (err) {
            res.status(400).json({
                sucess: false,
                message: 'Something went wrong'
            });
        }

        res.status(200).json({
            id: userDb.id
        });
    });
})

app.put('/user/:id', function(req, res) {
    let id = req.params.id;
    let body = req.body;

    User.update({ _id: id }, body, (err, userDb) => {
        if (err) {
            res.status(400).json({
                sucess: false,
                message: 'Something went wrong',
                error: err
            });
        }

        res.status(200).json({
            sucess: true
        })
    });
})

app.delete('/user/:id', function(req, res) {
    let id = req.params.id;
    let body = req.body;

    User.remove({ _id: id }, body, (err, userDb) => {
        if (err) {
            res.status(400).json({
                sucess: false,
                message: 'Something went wrong',
                error: err
            });
        }

        res.status(200).json({
            sucess: true
        })
    });
})

module.exports = app;