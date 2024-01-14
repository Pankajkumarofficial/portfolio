const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const path = require('path')

// dotenv config
dotenv.config();

// rest object
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// static files
app.use(express.static(path.join(__dirname, './client/build')))

// routes
app.use('/api/v1/portfolio', require('./Routes/portofolioRoutes'));
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

// ports
const PORT = process.env.PORT || 8080

// listen
app.listen(PORT, () => {
    console.log(`server running on PORT http://localhost:${PORT}`)
})