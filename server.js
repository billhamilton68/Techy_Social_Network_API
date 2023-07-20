const express = require('express');
const db = require('./config/connection');
const userRoutes = require('./routes/api/user-routes');
const thoughtRoutes = require('./routes/api/thought-routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));

db.once('open', () => {
    console.log('Database connected');
    }
);



