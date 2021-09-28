'use strict'
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const server = express();
server.use(cors());
server.use(express.json());

const PORT=process.env.PORT;

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB, { useNewUrlParser: true });


const {
    getAllData,
    AddFavData,
    getFavData,
    updateFav,
    deleteFav,
} = require('./Controller/data.Contorller')

// a server endpoint 
server.get('/getAllData',getAllData);
server.post('/AddFavData',AddFavData);
server.get('/getFavData',getFavData);
server.put('/updateFav/:id',updateFav);
server.delete('/deleteFav/:id',deleteFav);
 
server.listen(PORT) ;