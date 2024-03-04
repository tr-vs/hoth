require('dotenv').config();

const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');

const app = express();

const userRoutes = require('./routes/userRoutes');
const gameRoutes = require('./routes/gameRoutes');

app.use(express.json()).use(cookieParser());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// cors requirements
const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your frontend's URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};

app.use(cors(corsOptions));

app.use('/api/users', userRoutes);
app.use('/api/games', gameRoutes);

app.listen(
    process.env.PORT,
    console.log(`listening on PORT ${process.env.PORT}`)
);
