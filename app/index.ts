'use strict'

import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.options('*', cors())

app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send('Hello World!')
})

exports.handler = app
