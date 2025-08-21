const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const DB_URL = "mongodb+srv://sinchandoraemon6:FV3bsqP7oXsRWRZm@awtpractic.qoyint1.mongodb.net/Amount"

app.use(cors())
app.use(express.json())

mongoose.connect(DB_URL)
    .then(() => { console.log("DB is Connected") })
    .catch((err) => { console.log(err) })

const billSchema = new mongoose.Schema({
    amount: Number
})

const Bill = mongoose.model('Bill', billSchema)

app.get('/bills', async (req, res) => {
    try {
        const bills = await Bill.find()
        res.json(bills)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Failed to Fetch" })
    }
})
app.listen(5000, () => {
    console.log("Listening to PORT 5000")
})