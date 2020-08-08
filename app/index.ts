'use strict'

import express from 'express'
import cors from 'cors'
import { Firestore } from '@google-cloud/firestore'

let firestore: Firestore

if (process.env.ENV === 'local') {
  const grpc = require('@grpc/grpc-js')
  firestore = new Firestore({
    projectId: 'firestore-emulator-sample',
    servicePath: 'firestore',
    port: 8974,
    sslCreds: grpc.credentials.createInsecure(),
    customHeaders: {
      "Authorization": "Bearer owner"
    }
  })
} else {
  firestore = new Firestore()
}

const app = express()
app.use(cors())
app.options('*', cors())

app.get('/', async (req: express.Request, res: express.Response) => {
  if (!firestore) {
    console.warn('firestore has not been initialized.')
    res.status(200).send('SKIP')
    return
  }
  const docPath = 'test/1'
  const messages = ['大吉', '吉', '中吉', '小吉', '末吉', '凶']
  await firestore.doc(docPath).set({
    message: messages[Math.floor(Math.random() * messages.length)]
  })
  const message = (await firestore.doc(docPath).get()).get('message')
  res.status(200).send(`[GET] 今日も一日 !!! ${message} !!!`)
})

exports.handler = app
