const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();

import * as dotenv from 'dotenv'
dotenv.config();

const answerSchema = new mongoose.Schema({
    score: number


})

mongoose.connect(process.env.URI)