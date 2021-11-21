const express = require('express');
const connectDB = require('./db')
const applicationsRoutes = require('./routes/applications.routes');
const userRoutes = require('./routes/users.routes')
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 8080;

connectDB();

app.use(bodyParser.json())

app.use('/applications', applicationsRoutes);
app.use('/auth', userRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`))