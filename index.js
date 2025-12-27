const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World from Finland!</h1>')
})

const PORT = 3300

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
