const express = require('express')
const dotenv = require('dotenv')
dotenv.config({ path: '.env' })
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/users', (req, res) => {
    res.json(users);
});
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    users.push(newUser)
    res.status(201).json(newUser);
});
app.get('/users/:userId', (req, res) => {
    console.log('params:',req.params);
    console.log('query:',req.query);
    console.log('body:',req.body);
    const user = users.find(user=> user.id === +req.params.userId);
    res.json(user);
});
app.delete('/users/:userId', (req, res) => {
    users = users.filter(user => user.id !== Number(req.params.userId));
    res.sendStatus(204);
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})