// backend/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const hospitalRoutes = require('./routes/hospitals');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/hospitals', hospitalRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});