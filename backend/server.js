const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const personnelController = require('./controllers/personnelController');
const violatorController = require('./controllers/violatorController');
const challanController = require('./controllers/challanController');
const vehicleController = require('./controllers/vehicleController');
// const smsController = require('./controllers/smsController');
const emailController = require('./controllers/emailController');

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(cors());

const mongoUrl = process.env.MONGO_URI;
mongoose.connect(mongoUrl);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
app.post('/signup', personnelController.signup);
app.post('/login', personnelController.login);
app.get('/fetchPersonnelDetails/:email', personnelController.fetchPersonnelDetails);
app.post('/addViolator', violatorController.addViolator);
app.get('/getViolatorDetails/:aadharNumber', violatorController.getViolatorDetails);
app.post('/generateChallanReceipt', challanController.generateChallanReceipt);
app.get('/fetchChallan/:aadharNumber', challanController.fetchChallan);
app.post('/addVehicle', vehicleController.addVehicle);
app.get('/fetchVehicleDetails/:aadharNumber', vehicleController.fetchVehicleDetails);
// app.post('/send-sms', smsController.sendSMS);
app.post('/sendEmail', emailController.sendEmail);


const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Trying another port...`);
    server.listen(port + 1);
  }
});
