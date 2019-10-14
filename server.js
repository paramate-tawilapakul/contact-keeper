const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
//const bodyParser = require('body-parser');
//const bcrypt = require('bcryptjs');
const connectDB = require('./config/db');

const app = express();

connectDB();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json({ extended: false }));
// app.use(bodyParser.json());

// Endpoints
app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the ContactKeeper API...' })
);

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

// Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
