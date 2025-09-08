require('dotenv').config({ quiet: true })
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send('gourav singh is creating express server')
})
app.get('/login', (req, res) => {
    res.send('please login')
})


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
