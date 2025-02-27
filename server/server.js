const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();


const answerSchema = new mongoose.Schema({
    score: number


})

mongoose.connect('mongodb+srv://alibowens3626:8j3xB7NPKV6IViph@cluster0.qpil7.mongodb.net/')