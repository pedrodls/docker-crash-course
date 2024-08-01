
const express = require('express');
const cors = require('cors');

const server = express();

server.use(cors())

server.get("/", (req, res) => {
    res.json({status: "Iam alive"})
})

server.listen(4000, () => {
    console.log("Hiii http://localhost:4000")
})