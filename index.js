
// communicate between server to client
const express = require('express')

// fetch  data from the database
const mongoose = require('mongoose')


const cors = require('cors')

require("dotenv").config();

const app = express()

app.use(cors())
app.use(express.json())



app.get('/', (req, res) => {
    res.send({ "message": "data Fetched" })
})

app.post('/', (req, res) => {
    res.send({ "message": "data Added" })

})

app.put('/', (req, res) => {
    res.send({ "message": "data Upated" })

})

app.delete('/', (req, res) => {
    res.send({ "message": "data Deleted" })
})

// connect mongodb
mongoose.connect(process.env.URL).
    then((res) => {
        console.log("MongoDb is connected")
    })
    .catch((error) => {
        console.log("error to connect mongodb database")
    })

app.listen(process.env.PORT, () =>
    console.log(`🚀 Server running on port ${process.env.PORT}`)
);
