const express = require('express');
const cors = require("cors");
const app = express();
const path = require('path');
const router = express.Router();

// check for cors
app.use(cors({
    domains: '*',
    methods: "*"
}));

app.get('/', (req, res) => {
    res.send('Hello World!')
});

//add the router
app.use('/', router);
app.listen(process.env.port || 5001);


app.listen(5000, () => console.log(`Example app listening on port 5000!`))