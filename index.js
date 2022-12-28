const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json('hi')
})

app.get('/news', (req, res) => {
  const cats = {
    method: 'GET',
    url: `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${process.env.CATS_API_KEY}`
  }

  axios.request(cats).then((response) => {
    res.json(response.data)
  }).catch((error) => {
    console.error(error)
  })
})

app.listen(8000, () => console.log(`Server is running on port ${PORT}`))