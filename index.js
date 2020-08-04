const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

const emailRouter = require('./server/routes/emails')

// Database
require('./server/db/db');

//Im testing with this comment

// Settings
app.set('PORT', process.env.PORT || 5000 );
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan('dev'));

// Session


// Api
app.use('/emails', emailRouter);

app.listen(app.get('PORT'), () => {
    console.log(`Server on PORT: ${app.get('PORT')}`);
})