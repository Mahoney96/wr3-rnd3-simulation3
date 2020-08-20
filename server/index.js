require('dotenv').config
const express = require('express')
const massive = require('massive')

SERVER_PORT= 3993

const app = express()

app.use(express.json())

app.listen(CONST_PORT, () => console.log(`Hey Hey, Your Server Works Today ${SERVER_PORT}`))

