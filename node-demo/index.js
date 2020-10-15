import bodyParser from 'body-parser'
import { express } from 'express'
import { cors } from 'cors'
const app = express()
const port = 3001

app.use(cors())
app.use(bodyParser.json())

app.get('/check', (req, res) => {
  req.send({
    status: 'up'
  })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})