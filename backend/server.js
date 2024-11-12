// server.js
const express = require('express');
const mongoose = require('./db');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
