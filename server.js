require('dotenv').config()

const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./schema/driver');

const app = express();
app.use(cors());
const router = express.Router();

// MongoDB database
const dbRoute =process.env.MONGO_DB_STRING;
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;
db.once('open', () => console.log('Connected to the database'));
// checks connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));


router.post('/drivers/add', (req, res) => {
  let data = new Data();

  const { name, phone } = req.body;
  data.name = name;
  data.phone = phone;

  data.save((err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

app.use('/api', router);

app.listen(4000, () =>
  console.log('Example app listening on port 4000!'),
);