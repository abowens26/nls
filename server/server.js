const express = require('express')
require('dotenv').config()
const app = express()
const mongoose = require('mongoose')
const cors = require('cors');
app.use(cors());

//Import testscore schema from models.js
const TestScore = require('./models.js')

app.use(express.json());
//Connect to mongoDB database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('connected to DB & listening on port', process.env.PORT)
    })
  })
  .catch(() => {
    console.log('connection failed')
  })


//test API
app.get('/', async (req, res) => {
  res.send("Hello Ali");

});

//gets test scores from database
app.get('/api/score', async (req, res) => {
  try {
    const Score = await TestScore.find({});
    res.status(200).json(Score);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})

//post test scores to database 
app.post('/api/score', async (req, res) => {

  try {

    const Score = await TestScore.create(req.body)
    res.status(200).json(Score);
  } catch (error) {

    console.error('Test score not saved', error.message)
    res.status(500).json ({messsage: error.message})
  }


  
});

//Test API
app.get('/', (req, res) => {
  res.json({ mssg: 'Welcome to the app' })

})



