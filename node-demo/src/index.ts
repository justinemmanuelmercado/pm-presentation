import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
const app = express()
const port = 3001

app.use(cors())
app.use(bodyParser.json())

app.get('/check', (req, res) => {
  res.send({
    status: 'up'
  })
})

app.post('/add', (req, res) => {
  const { number1, number2 } = req.body
  const result = number1 + number2
  console.log(req.body)
  res.send({ result: result })
  res.status(200)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})