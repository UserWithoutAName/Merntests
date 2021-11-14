const express = require('express');
const connectDB = require('./db')
const applicationsRoutes = require('./routes/applications.routes');
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 8080;

connectDB();

app.use(bodyParser.json())

app.use('/applications', applicationsRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`))